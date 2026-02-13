// app.js - Gestionnaire d'état global de l'application SolFun

class SolFunApp {
    constructor() {
        this.state = this.loadState() || this.getDefaultState();
    }

    getDefaultState() {
        return {
            user: {
                name: "Musicien",
                level: 1,
                avatar: "cat"
            },
            stats: {
                totalExercises: 0,
                correctAnswers: 0,
                currentStreak: 0,
                totalTime: 0,
                badges: []
            },
            progress: {
                level1: { stars: 0, completed: false },
                level2: { stars: 0, completed: false },
                level3: { stars: 0, completed: false },
                level4: { stars: 0, completed: false },
                level5: { stars: 0, completed: false },
                level6: { stars: 0, completed: false }
            },
            settings: {
                speed: 'normal', // slow, normal, fast
                soundEnabled: true
            },
            currentSession: {
                level: 1,
                score: 0,
                total: 0,
                streak: 0
            }
        };
    }

    loadState() {
        try {
            const saved = localStorage.getItem('solfun-state');
            if (!saved) return null;
            const parsed = JSON.parse(saved);
            // Merge with defaults to handle missing keys from older versions
            const defaults = this.getDefaultState();
            return {
                user: { ...defaults.user, ...(parsed.user || {}) },
                stats: { ...defaults.stats, ...(parsed.stats || {}) },
                progress: {
                    level1: { ...defaults.progress.level1, ...(parsed.progress?.level1 || {}) },
                    level2: { ...defaults.progress.level2, ...(parsed.progress?.level2 || {}) },
                    level3: { ...defaults.progress.level3, ...(parsed.progress?.level3 || {}) },
                    level4: { ...defaults.progress.level4, ...(parsed.progress?.level4 || {}) },
                    level5: { ...defaults.progress.level5, ...(parsed.progress?.level5 || {}) },
                    level6: { ...defaults.progress.level6, ...(parsed.progress?.level6 || {}) }
                },
                settings: { ...defaults.settings, ...(parsed.settings || {}) },
                currentSession: { ...defaults.currentSession, ...(parsed.currentSession || {}) }
            };
        } catch (e) {
            console.warn('SolFun: impossible de charger la sauvegarde, reset.', e);
            return null;
        }
    }

    saveState() {
        try {
            localStorage.setItem('solfun-state', JSON.stringify(this.state));
        } catch (e) {
            console.warn('SolFun: impossible de sauvegarder.', e);
        }
    }

    updateStats(correct) {
        this.state.stats.totalExercises++;
        if (correct) {
            this.state.stats.correctAnswers++;
            this.state.currentSession.streak++;
            this.state.currentSession.score++;
        } else {
            this.state.currentSession.streak = 0;
        }
        this.state.currentSession.total++;
        this.saveState();
    }

    getSuccessRate() {
        if (this.state.stats.totalExercises === 0) return 0;
        return Math.round((this.state.stats.correctAnswers / this.state.stats.totalExercises) * 100);
    }

    startLevel(levelNumber) {
        this.state.currentSession = {
            level: levelNumber,
            score: 0,
            total: 0,
            streak: 0
        };
        this.saveState();
    }

    setSpeed(speed) {
        this.state.settings.speed = speed;
        this.saveState();
    }

    toggleSound() {
        this.state.settings.soundEnabled = !this.state.settings.soundEnabled;
        this.saveState();
        return this.state.settings.soundEnabled;
    }

    resetProgress() {
        if (confirm('Es-tu sur de vouloir reinitialiser toute ta progression ?')) {
            this.state = this.getDefaultState();
            this.saveState();
            return true;
        }
        return false;
    }
}

// Initialiser l'application
const app = new SolFunApp();

// Helper pour jouer des sons (compatible iOS Safari)
class SoundPlayer {
    constructor() {
        this.audioContext = null;
        this.unlocked = false;
        this.notes = {
            'Do': 261.63,
            'Ré': 293.66,
            'Mi': 329.63,
            'Fa': 349.23,
            'Sol': 392.00,
            'La': 440.00,
            'Si': 493.88
        };
        this._setupIOSUnlock();
    }

    init() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        // iOS Safari suspends AudioContext until a user gesture resumes it
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
    }

    // iOS requires a user-initiated touch to unlock audio
    _setupIOSUnlock() {
        const unlock = () => {
            if (this.unlocked) return;
            this.init();
            // Play a silent buffer to fully unlock audio on iOS
            if (this.audioContext) {
                const buffer = this.audioContext.createBuffer(1, 1, 22050);
                const source = this.audioContext.createBufferSource();
                source.buffer = buffer;
                source.connect(this.audioContext.destination);
                source.start(0);
                this.unlocked = true;
            }
        };
        // Listen for the first user interaction
        document.addEventListener('touchstart', unlock, { once: true });
        document.addEventListener('touchend', unlock, { once: true });
        document.addEventListener('click', unlock, { once: true });
    }

    playNote(noteName, duration = 0.5) {
        if (!app.state.settings.soundEnabled) return;

        this.init();
        const frequency = this.notes[noteName];
        if (!frequency) return;

        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            oscillator.frequency.value = frequency;
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + duration);
        } catch (e) {
            console.warn('SolFun: erreur audio', e);
        }
    }

    playSuccess() {
        if (!app.state.settings.soundEnabled) return;
        this.playNote('Do', 0.2);
        setTimeout(() => this.playNote('Mi', 0.2), 150);
        setTimeout(() => this.playNote('Sol', 0.3), 300);
    }

    playError() {
        if (!app.state.settings.soundEnabled) return;
        this.playNote('Fa', 0.3);
    }
}

const sound = new SoundPlayer();

// Helper pour la navigation
function navigateTo(page) {
    window.location.href = page;
}

// Helper pour formater le temps
function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
        return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
}
