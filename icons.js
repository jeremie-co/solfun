// icons.js - Bibliotheque d'icones SVG "ligne fine & aquarelle" pour SolFun
// Style : traits fins irreguliers + remplissages pastel semi-transparents

const SolFunIcons = {
    // Presets de taille
    _sizeMap: { sm: 20, md: 32, lg: 64, xl: 120 },
    _getSize(size) {
        if (typeof size === 'number') return size;
        return this._sizeMap[size] || this._sizeMap.md;
    },

    // Wrapper commun
    _wrap(svg, size, label, decorative) {
        const s = this._getSize(size);
        const aria = decorative
            ? 'aria-hidden="true"'
            : `role="img" aria-label="${label}"`;
        return `<span class="solfun-icon" ${aria} style="display:inline-block;vertical-align:middle;width:${s}px;height:${s}px;line-height:0"><svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg" style="display:block">${svg}</svg></span>`;
    },

    // ─────────────────────────────────
    //  MUSIQUE
    // ─────────────────────────────────

    musicNote(size = 'md', label = 'Note de musique') {
        return this._wrap(`
            <ellipse cx="38" cy="72" rx="16" ry="12" transform="rotate(-15 38 72)" fill="#B4D4FF" fill-opacity="0.6"/>
            <ellipse cx="39" cy="71" rx="14" ry="10" transform="rotate(-15 39 71)" fill="#6B9BD1" fill-opacity="0.5"/>
            <line x1="52" y1="66" x2="52" y2="18" stroke="#4A4A68" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M 52 18 Q 68 16 68 28 Q 68 38 52 36" fill="none" stroke="#4A4A68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M 52 18 Q 66 17 66 27 Q 66 35 52 34" fill="#B4D4FF" fill-opacity="0.3"/>
        `, size, label);
    },

    doubleNote(size = 'md', label = 'Notes de musique') {
        return this._wrap(`
            <ellipse cx="28" cy="72" rx="13" ry="10" transform="rotate(-12 28 72)" fill="#B4D4FF" fill-opacity="0.6"/>
            <ellipse cx="29" cy="71" rx="11" ry="8" transform="rotate(-12 29 71)" fill="#6B9BD1" fill-opacity="0.5"/>
            <ellipse cx="68" cy="65" rx="13" ry="10" transform="rotate(-12 68 65)" fill="#B4D4FF" fill-opacity="0.6"/>
            <ellipse cx="69" cy="64" rx="11" ry="8" transform="rotate(-12 69 64)" fill="#6B9BD1" fill-opacity="0.5"/>
            <line x1="40" y1="66" x2="40" y2="22" stroke="#4A4A68" stroke-width="2.2" stroke-linecap="round"/>
            <line x1="80" y1="59" x2="80" y2="15" stroke="#4A4A68" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M 40 22 Q 41 18 60 15 Q 79 12 80 15" fill="none" stroke="#4A4A68" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M 40 30 Q 41 26 60 23 Q 79 20 80 23" fill="none" stroke="#4A4A68" stroke-width="2.5" stroke-linecap="round"/>
        `, size, label);
    },

    musicalScore(size = 'md', label = 'Partition') {
        return this._wrap(`
            <line x1="12" y1="30" x2="88" y2="30" stroke="#4A4A68" stroke-width="1" stroke-opacity="0.5"/>
            <line x1="12" y1="40" x2="88" y2="40" stroke="#4A4A68" stroke-width="1" stroke-opacity="0.5"/>
            <line x1="12" y1="50" x2="88" y2="50" stroke="#4A4A68" stroke-width="1" stroke-opacity="0.5"/>
            <line x1="12" y1="60" x2="88" y2="60" stroke="#4A4A68" stroke-width="1" stroke-opacity="0.5"/>
            <line x1="12" y1="70" x2="88" y2="70" stroke="#4A4A68" stroke-width="1" stroke-opacity="0.5"/>
            <ellipse cx="30" cy="60" rx="7" ry="5" transform="rotate(-15 30 60)" fill="#6B9BD1" fill-opacity="0.6"/>
            <line x1="36" y1="57" x2="36" y2="32" stroke="#4A4A68" stroke-width="1.8" stroke-linecap="round"/>
            <ellipse cx="52" cy="50" rx="7" ry="5" transform="rotate(-15 52 50)" fill="#9B86BD" fill-opacity="0.6"/>
            <line x1="58" y1="47" x2="58" y2="22" stroke="#4A4A68" stroke-width="1.8" stroke-linecap="round"/>
            <ellipse cx="74" cy="55" rx="7" ry="5" transform="rotate(-15 74 55)" fill="#6B9BD1" fill-opacity="0.6"/>
            <line x1="80" y1="52" x2="80" y2="27" stroke="#4A4A68" stroke-width="1.8" stroke-linecap="round"/>
        `, size, label);
    },

    piano(size = 'md', label = 'Piano') {
        return this._wrap(`
            <rect x="15" y="25" width="70" height="50" rx="4" fill="#E5D4FF" fill-opacity="0.5" stroke="#4A4A68" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="32.5" y1="25" x2="32.5" y2="75" stroke="#4A4A68" stroke-width="1.2" stroke-opacity="0.6"/>
            <line x1="50" y1="25" x2="50" y2="75" stroke="#4A4A68" stroke-width="1.2" stroke-opacity="0.6"/>
            <line x1="67.5" y1="25" x2="67.5" y2="75" stroke="#4A4A68" stroke-width="1.2" stroke-opacity="0.6"/>
            <rect x="26" y="25" width="9" height="30" rx="1.5" fill="#4A4A68" fill-opacity="0.75"/>
            <rect x="44" y="25" width="9" height="30" rx="1.5" fill="#4A4A68" fill-opacity="0.75"/>
            <rect x="61" y="25" width="9" height="30" rx="1.5" fill="#4A4A68" fill-opacity="0.75"/>
            <ellipse cx="50" cy="86" rx="18" ry="3" fill="#E5D4FF" fill-opacity="0.3"/>
        `, size, label);
    },

    drum(size = 'md', label = 'Tambour') {
        return this._wrap(`
            <ellipse cx="50" cy="65" rx="30" ry="10" fill="#FFE5CC" fill-opacity="0.5" stroke="#4A4A68" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M 20 40 L 20 65" stroke="#4A4A68" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M 80 40 L 80 65" stroke="#4A4A68" stroke-width="1.5" stroke-linecap="round"/>
            <ellipse cx="50" cy="40" rx="30" ry="10" fill="#FFD4E5" fill-opacity="0.5" stroke="#4A4A68" stroke-width="1.5" stroke-linecap="round"/>
            <ellipse cx="50" cy="40" rx="30" ry="10" fill="#FFE5CC" fill-opacity="0.2"/>
            <path d="M 20 40 Q 28 48 36 40" stroke="#4A4A68" stroke-width="1" stroke-opacity="0.4" fill="none"/>
            <path d="M 42 40 Q 50 48 58 40" stroke="#4A4A68" stroke-width="1" stroke-opacity="0.4" fill="none"/>
            <path d="M 64 40 Q 72 48 80 40" stroke="#4A4A68" stroke-width="1" stroke-opacity="0.4" fill="none"/>
            <line x1="35" y1="22" x2="55" y2="38" stroke="#4A4A68" stroke-width="1.8" stroke-linecap="round"/>
            <circle cx="33" cy="20" r="4" fill="#FFD4E5" fill-opacity="0.7" stroke="#4A4A68" stroke-width="1.2"/>
            <line x1="65" y1="22" x2="45" y2="38" stroke="#4A4A68" stroke-width="1.8" stroke-linecap="round"/>
            <circle cx="67" cy="20" r="4" fill="#FFD4E5" fill-opacity="0.7" stroke="#4A4A68" stroke-width="1.2"/>
        `, size, label);
    },

    // ─────────────────────────────────
    //  ETOILES / RECOMPENSES
    // ─────────────────────────────────

    star(size = 'md', label = 'Etoile') {
        return this._wrap(`
            <path d="M 50 12 L 58 38 L 86 38 L 64 54 L 72 82 L 50 66 L 28 82 L 36 54 L 14 38 L 42 38 Z"
                fill="#FFE5A0" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
            <path d="M 50 18 L 56 38 L 78 38 L 60 52 L 67 74 L 50 62 L 33 74 L 40 52 L 22 38 L 44 38 Z"
                fill="#FFD080" fill-opacity="0.3"/>
        `, size, label);
    },

    starEmpty(size = 'md', label = 'Etoile vide') {
        return this._wrap(`
            <path d="M 50 12 L 58 38 L 86 38 L 64 54 L 72 82 L 50 66 L 28 82 L 36 54 L 14 38 L 42 38 Z"
                fill="#D0D0D0" fill-opacity="0.3" stroke="#B0B0B0" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
        `, size, label);
    },

    trophy(size = 'md', label = 'Trophee') {
        return this._wrap(`
            <path d="M 35 30 L 35 55 Q 35 70 50 72 Q 65 70 65 55 L 65 30 Z" fill="#FFE5A0" fill-opacity="0.5" stroke="#4A4A68" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
            <path d="M 35 35 Q 20 35 18 45 Q 16 55 30 55" fill="none" stroke="#4A4A68" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M 65 35 Q 80 35 82 45 Q 84 55 70 55" fill="none" stroke="#4A4A68" stroke-width="1.5" stroke-linecap="round"/>
            <rect x="42" y="72" width="16" height="6" rx="2" fill="#FFE5CC" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.2"/>
            <rect x="36" y="78" width="28" height="5" rx="2" fill="#FFE5CC" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.2"/>
            <path d="M 40 35 L 40 50 Q 40 60 50 62 Q 60 60 60 50 L 60 35" fill="#FFD080" fill-opacity="0.2"/>
        `, size, label);
    },

    // ─────────────────────────────────
    //  STATISTIQUES
    // ─────────────────────────────────

    barChart(size = 'md', label = 'Statistiques') {
        return this._wrap(`
            <rect x="16" y="55" width="16" height="25" rx="3" fill="#B4D4FF" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="38" y="35" width="16" height="45" rx="3" fill="#E5D4FF" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="60" y="20" width="16" height="60" rx="3" fill="#FFD4E5" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="10" y1="82" x2="82" y2="82" stroke="#4A4A68" stroke-width="1.5" stroke-linecap="round"/>
        `, size, label);
    },

    chartUp(size = 'md', label = 'Progression') {
        return this._wrap(`
            <line x1="15" y1="80" x2="15" y2="18" stroke="#4A4A68" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="15" y1="80" x2="85" y2="80" stroke="#4A4A68" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M 22 68 Q 35 65 42 52 Q 52 35 62 38 Q 72 30 80 20" fill="none" stroke="#9B86BD" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M 22 68 Q 35 65 42 52 Q 52 35 62 38 Q 72 30 80 20 L 80 80 L 22 80 Z" fill="#E5D4FF" fill-opacity="0.3"/>
            <circle cx="22" cy="68" r="3.5" fill="#9B86BD" fill-opacity="0.7" stroke="#4A4A68" stroke-width="1"/>
            <circle cx="42" cy="52" r="3.5" fill="#9B86BD" fill-opacity="0.7" stroke="#4A4A68" stroke-width="1"/>
            <circle cx="62" cy="38" r="3.5" fill="#9B86BD" fill-opacity="0.7" stroke="#4A4A68" stroke-width="1"/>
            <circle cx="80" cy="20" r="3.5" fill="#9B86BD" fill-opacity="0.7" stroke="#4A4A68" stroke-width="1"/>
        `, size, label);
    },

    target(size = 'md', label = 'Objectif') {
        return this._wrap(`
            <circle cx="50" cy="50" r="36" fill="#FFD4E5" fill-opacity="0.3" stroke="#4A4A68" stroke-width="1.5"/>
            <circle cx="50" cy="50" r="26" fill="#E5D4FF" fill-opacity="0.3" stroke="#4A4A68" stroke-width="1.3"/>
            <circle cx="50" cy="50" r="16" fill="#B4D4FF" fill-opacity="0.4" stroke="#4A4A68" stroke-width="1.3"/>
            <circle cx="50" cy="50" r="6" fill="#6B9BD1" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.2"/>
        `, size, label);
    },

    fire(size = 'md', label = 'Serie') {
        return this._wrap(`
            <path d="M 50 12 Q 55 30 68 38 Q 80 48 78 62 Q 76 78 60 85 Q 50 88 40 85 Q 24 78 22 62 Q 20 48 32 38 Q 45 30 50 12 Z"
                fill="#FFE5CC" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
            <path d="M 50 32 Q 53 42 60 48 Q 68 55 66 65 Q 64 75 55 78 Q 50 80 45 78 Q 36 75 34 65 Q 32 55 40 48 Q 47 42 50 32 Z"
                fill="#FFD4E5" fill-opacity="0.5"/>
            <path d="M 50 50 Q 52 56 56 60 Q 60 65 58 70 Q 56 76 50 76 Q 44 76 42 70 Q 40 65 44 60 Q 48 56 50 50 Z"
                fill="#FF9B9B" fill-opacity="0.4"/>
        `, size, label);
    },

    timer(size = 'md', label = 'Temps') {
        return this._wrap(`
            <circle cx="50" cy="55" r="32" fill="#D4FFEA" fill-opacity="0.4" stroke="#4A4A68" stroke-width="1.8"/>
            <circle cx="50" cy="55" r="32" fill="#B4D4FF" fill-opacity="0.15"/>
            <line x1="42" y1="18" x2="58" y2="18" stroke="#4A4A68" stroke-width="2" stroke-linecap="round"/>
            <line x1="50" y1="18" x2="50" y2="24" stroke="#4A4A68" stroke-width="1.8" stroke-linecap="round"/>
            <line x1="50" y1="55" x2="50" y2="35" stroke="#4A4A68" stroke-width="1.8" stroke-linecap="round"/>
            <line x1="50" y1="55" x2="64" y2="62" stroke="#9B86BD" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="50" cy="55" r="2.5" fill="#4A4A68"/>
            <line x1="68" y1="26" x2="74" y2="20" stroke="#4A4A68" stroke-width="1.5" stroke-linecap="round"/>
        `, size, label);
    },

    // ─────────────────────────────────
    //  MASCOTTES
    // ─────────────────────────────────

    cat(size = 'md', label = 'Chat') {
        return this._wrap(`
            <circle cx="50" cy="55" r="30" fill="#FFD4E5" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.8"/>
            <circle cx="50" cy="55" r="28" fill="#FFD4E5" fill-opacity="0.3"/>
            <path d="M 28 38 L 22 14 L 38 30 Z" fill="#FFD4E5" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M 72 38 L 78 14 L 62 30 Z" fill="#FFD4E5" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M 30 35 L 26 20 L 38 30" fill="#FFE5CC" fill-opacity="0.5"/>
            <path d="M 70 35 L 74 20 L 62 30" fill="#FFE5CC" fill-opacity="0.5"/>
            <circle cx="40" cy="50" r="4.5" fill="#4A4A68"/>
            <circle cx="60" cy="50" r="4.5" fill="#4A4A68"/>
            <circle cx="41.5" cy="48.5" r="1.5" fill="white"/>
            <circle cx="61.5" cy="48.5" r="1.5" fill="white"/>
            <ellipse cx="50" cy="60" rx="3" ry="2.5" fill="#9B86BD" fill-opacity="0.7"/>
            <path d="M 42 64 Q 50 70 58 64" stroke="#4A4A68" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            <line x1="24" y1="52" x2="12" y2="50" stroke="#4A4A68" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="24" y1="56" x2="12" y2="58" stroke="#4A4A68" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="76" y1="52" x2="88" y2="50" stroke="#4A4A68" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="76" y1="56" x2="88" y2="58" stroke="#4A4A68" stroke-width="1.2" stroke-linecap="round"/>
        `, size, label);
    },

    fox(size = 'md', label = 'Renard') {
        return this._wrap(`
            <circle cx="50" cy="55" r="28" fill="#FFE5CC" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.8"/>
            <circle cx="50" cy="55" r="26" fill="#FFE5CC" fill-opacity="0.3"/>
            <path d="M 26 42 L 16 10 L 40 32 Z" fill="#FFE5CC" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M 74 42 L 84 10 L 60 32 Z" fill="#FFE5CC" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M 28 38 L 22 18 L 38 32" fill="#FFD4E5" fill-opacity="0.4"/>
            <path d="M 72 38 L 78 18 L 62 32" fill="#FFD4E5" fill-opacity="0.4"/>
            <circle cx="40" cy="50" r="4" fill="#4A4A68"/>
            <circle cx="60" cy="50" r="4" fill="#4A4A68"/>
            <circle cx="41.2" cy="48.8" r="1.3" fill="white"/>
            <circle cx="61.2" cy="48.8" r="1.3" fill="white"/>
            <path d="M 44 62 L 50 66 L 56 62" fill="#FFD4E5" fill-opacity="0.5" stroke="#4A4A68" stroke-width="1.3" stroke-linejoin="round" stroke-linecap="round"/>
            <ellipse cx="50" cy="60" rx="3" ry="2" fill="#4A4A68" fill-opacity="0.8"/>
            <path d="M 36 68 Q 42 74 50 74 Q 58 74 64 68" fill="white" fill-opacity="0.5" stroke="none"/>
        `, size, label);
    },

    bear(size = 'md', label = 'Ours') {
        return this._wrap(`
            <circle cx="30" cy="30" r="14" fill="#E5D4FF" fill-opacity="0.5" stroke="#4A4A68" stroke-width="1.5"/>
            <circle cx="30" cy="30" r="8" fill="#D4BFFF" fill-opacity="0.4"/>
            <circle cx="70" cy="30" r="14" fill="#E5D4FF" fill-opacity="0.5" stroke="#4A4A68" stroke-width="1.5"/>
            <circle cx="70" cy="30" r="8" fill="#D4BFFF" fill-opacity="0.4"/>
            <circle cx="50" cy="55" r="30" fill="#E5D4FF" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.8"/>
            <circle cx="50" cy="55" r="28" fill="#E5D4FF" fill-opacity="0.25"/>
            <circle cx="40" cy="48" r="4.5" fill="#4A4A68"/>
            <circle cx="60" cy="48" r="4.5" fill="#4A4A68"/>
            <circle cx="41.3" cy="46.8" r="1.5" fill="white"/>
            <circle cx="61.3" cy="46.8" r="1.5" fill="white"/>
            <ellipse cx="50" cy="58" rx="4.5" ry="3.5" fill="#4A4A68" fill-opacity="0.7"/>
            <path d="M 43 64 Q 50 70 57 64" stroke="#4A4A68" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            <circle cx="34" cy="58" r="6" fill="#FFD4E5" fill-opacity="0.3"/>
            <circle cx="66" cy="58" r="6" fill="#FFD4E5" fill-opacity="0.3"/>
        `, size, label);
    },

    // ─────────────────────────────────
    //  FEEDBACK
    // ─────────────────────────────────

    celebration(size = 'md', label = 'Bravo !') {
        return this._wrap(`
            <circle cx="50" cy="50" r="8" fill="#FFE5A0" fill-opacity="0.7" stroke="#4A4A68" stroke-width="1.5"/>
            <line x1="50" y1="10" x2="50" y2="22" stroke="#FFD4E5" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="50" y1="78" x2="50" y2="90" stroke="#B4D4FF" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="10" y1="50" x2="22" y2="50" stroke="#D4FFEA" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="78" y1="50" x2="90" y2="50" stroke="#E5D4FF" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="22" y1="22" x2="30" y2="30" stroke="#FFD4E5" stroke-width="2" stroke-linecap="round"/>
            <line x1="78" y1="22" x2="70" y2="30" stroke="#B4D4FF" stroke-width="2" stroke-linecap="round"/>
            <line x1="22" y1="78" x2="30" y2="70" stroke="#E5D4FF" stroke-width="2" stroke-linecap="round"/>
            <line x1="78" y1="78" x2="70" y2="70" stroke="#D4FFEA" stroke-width="2" stroke-linecap="round"/>
            <circle cx="50" cy="14" r="3" fill="#FFD4E5" fill-opacity="0.6"/>
            <circle cx="86" cy="50" r="3" fill="#E5D4FF" fill-opacity="0.6"/>
            <circle cx="14" cy="50" r="3" fill="#D4FFEA" fill-opacity="0.6"/>
            <circle cx="50" cy="86" r="3" fill="#B4D4FF" fill-opacity="0.6"/>
            <path d="M 35 18 L 38 26 L 30 24 Z" fill="#FFE5CC" fill-opacity="0.7" stroke="#4A4A68" stroke-width="0.8"/>
            <path d="M 70 75 L 66 68 L 74 70 Z" fill="#FFD4E5" fill-opacity="0.7" stroke="#4A4A68" stroke-width="0.8"/>
            <path d="M 18 65 L 24 62 L 22 70 Z" fill="#B4D4FF" fill-opacity="0.7" stroke="#4A4A68" stroke-width="0.8"/>
            <path d="M 80 30 L 74 34 L 76 26 Z" fill="#D4FFEA" fill-opacity="0.7" stroke="#4A4A68" stroke-width="0.8"/>
        `, size, label);
    },

    oops(size = 'md', label = 'Presque !') {
        return this._wrap(`
            <ellipse cx="42" cy="62" rx="14" ry="10" transform="rotate(-15 42 62)" fill="#E5D4FF" fill-opacity="0.5" stroke="#4A4A68" stroke-width="1.8"/>
            <line x1="54" y1="56" x2="54" y2="22" stroke="#4A4A68" stroke-width="2" stroke-linecap="round"/>
            <path d="M 54 22 Q 68 20 68 30 Q 68 38 54 36" fill="#E5D4FF" fill-opacity="0.3" stroke="#4A4A68" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="36" cy="48" r="3" fill="#4A4A68"/>
            <circle cx="48" cy="46" r="3" fill="#4A4A68"/>
            <path d="M 34 50 Q 33 46 36 45" stroke="#4A4A68" stroke-width="1" fill="none" stroke-linecap="round"/>
            <path d="M 50 48 Q 49 44 46 43" stroke="#4A4A68" stroke-width="1" fill="none" stroke-linecap="round"/>
            <path d="M 36 55 Q 42 58 48 55" stroke="#4A4A68" stroke-width="1.3" fill="none" stroke-linecap="round"/>
            <path d="M 60 14 Q 64 10 68 14" stroke="#9B86BD" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            <path d="M 62 10 Q 66 6 70 10" stroke="#9B86BD" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-opacity="0.6"/>
        `, size, label);
    },

    // ─────────────────────────────────
    //  UI / REGLAGES
    // ─────────────────────────────────

    gear(size = 'md', label = 'Reglages') {
        return this._wrap(`
            <circle cx="50" cy="50" r="18" fill="#E5D4FF" fill-opacity="0.5" stroke="#4A4A68" stroke-width="1.8"/>
            <circle cx="50" cy="50" r="10" fill="white" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.3"/>
            <rect x="46" y="14" width="8" height="14" rx="3" fill="#E5D4FF" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.2"/>
            <rect x="46" y="72" width="8" height="14" rx="3" fill="#E5D4FF" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.2"/>
            <rect x="14" y="46" width="14" height="8" rx="3" fill="#E5D4FF" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.2"/>
            <rect x="72" y="46" width="14" height="8" rx="3" fill="#E5D4FF" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.2"/>
            <rect x="22" y="22" width="10" height="8" rx="3" transform="rotate(45 27 26)" fill="#E5D4FF" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.2"/>
            <rect x="68" y="22" width="10" height="8" rx="3" transform="rotate(-45 73 26)" fill="#E5D4FF" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.2"/>
            <rect x="22" y="70" width="10" height="8" rx="3" transform="rotate(-45 27 74)" fill="#E5D4FF" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.2"/>
            <rect x="68" y="70" width="10" height="8" rx="3" transform="rotate(45 73 74)" fill="#E5D4FF" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.2"/>
        `, size, label);
    },

    turtle(size = 'md', label = 'Lent') {
        return this._wrap(`
            <ellipse cx="50" cy="60" rx="26" ry="18" fill="#D4FFEA" fill-opacity="0.5" stroke="#4A4A68" stroke-width="1.8"/>
            <ellipse cx="50" cy="58" rx="22" ry="14" fill="#D4FFEA" fill-opacity="0.3"/>
            <path d="M 38 52 Q 42 42 50 42 Q 58 42 62 52" fill="#D4FFEA" fill-opacity="0.4" stroke="#4A4A68" stroke-width="1" fill-rule="evenodd"/>
            <line x1="44" y1="50" x2="50" y2="44" stroke="#4A4A68" stroke-width="0.8" stroke-opacity="0.5"/>
            <line x1="56" y1="50" x2="50" y2="44" stroke="#4A4A68" stroke-width="0.8" stroke-opacity="0.5"/>
            <line x1="50" y1="50" x2="50" y2="42" stroke="#4A4A68" stroke-width="0.8" stroke-opacity="0.5"/>
            <circle cx="28" cy="52" r="6" fill="#D4FFEA" fill-opacity="0.5" stroke="#4A4A68" stroke-width="1.5"/>
            <circle cx="26" cy="50" r="1.5" fill="#4A4A68"/>
            <path d="M 22 52 Q 18 50 16 52" stroke="#4A4A68" stroke-width="1" stroke-linecap="round" fill="none"/>
            <ellipse cx="32" cy="74" rx="5" ry="4" fill="#D4FFEA" fill-opacity="0.4" stroke="#4A4A68" stroke-width="1.2"/>
            <ellipse cx="68" cy="74" rx="5" ry="4" fill="#D4FFEA" fill-opacity="0.4" stroke="#4A4A68" stroke-width="1.2"/>
            <ellipse cx="74" cy="64" rx="4" ry="3" fill="#D4FFEA" fill-opacity="0.3" stroke="#4A4A68" stroke-width="1"/>
        `, size, label);
    },

    walker(size = 'md', label = 'Normal') {
        return this._wrap(`
            <ellipse cx="42" cy="68" rx="12" ry="9" transform="rotate(-10 42 68)" fill="#B4D4FF" fill-opacity="0.5" stroke="#4A4A68" stroke-width="1.8"/>
            <line x1="52" y1="63" x2="52" y2="30" stroke="#4A4A68" stroke-width="2" stroke-linecap="round"/>
            <path d="M 52 30 Q 64 28 64 36 Q 64 42 52 40" fill="#B4D4FF" fill-opacity="0.3" stroke="#4A4A68" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="36" y1="78" x2="30" y2="90" stroke="#4A4A68" stroke-width="1.8" stroke-linecap="round"/>
            <line x1="44" y1="76" x2="48" y2="90" stroke="#4A4A68" stroke-width="1.8" stroke-linecap="round"/>
        `, size, label);
    },

    runner(size = 'md', label = 'Rapide') {
        return this._wrap(`
            <ellipse cx="48" cy="62" rx="12" ry="9" transform="rotate(-25 48 62)" fill="#FFD4E5" fill-opacity="0.5" stroke="#4A4A68" stroke-width="1.8"/>
            <line x1="56" y1="55" x2="60" y2="22" stroke="#4A4A68" stroke-width="2" stroke-linecap="round"/>
            <path d="M 60 22 Q 72 20 72 28 Q 72 34 60 32" fill="#FFD4E5" fill-opacity="0.3" stroke="#4A4A68" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="38" y1="70" x2="26" y2="86" stroke="#4A4A68" stroke-width="1.8" stroke-linecap="round"/>
            <line x1="48" y1="68" x2="56" y2="86" stroke="#4A4A68" stroke-width="1.8" stroke-linecap="round"/>
            <line x1="14" y1="48" x2="30" y2="48" stroke="#9B86BD" stroke-width="1.5" stroke-linecap="round" stroke-opacity="0.5"/>
            <line x1="10" y1="54" x2="24" y2="54" stroke="#9B86BD" stroke-width="1.2" stroke-linecap="round" stroke-opacity="0.4"/>
            <line x1="16" y1="60" x2="28" y2="60" stroke="#9B86BD" stroke-width="1" stroke-linecap="round" stroke-opacity="0.3"/>
        `, size, label);
    },

    speakerOn(size = 'md', label = 'Son active') {
        return this._wrap(`
            <path d="M 25 38 L 38 38 L 55 22 L 55 78 L 38 62 L 25 62 Z" fill="#B4D4FF" fill-opacity="0.5" stroke="#4A4A68" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
            <path d="M 25 40 L 38 40 L 52 26 L 52 74 L 38 60 L 25 60 Z" fill="#B4D4FF" fill-opacity="0.2"/>
            <path d="M 62 35 Q 72 42 72 50 Q 72 58 62 65" fill="none" stroke="#4A4A68" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M 68 28 Q 82 38 82 50 Q 82 62 68 72" fill="none" stroke="#4A4A68" stroke-width="1.5" stroke-linecap="round" stroke-opacity="0.5"/>
        `, size, label);
    },

    speakerOff(size = 'md', label = 'Son desactive') {
        return this._wrap(`
            <path d="M 25 38 L 38 38 L 55 22 L 55 78 L 38 62 L 25 62 Z" fill="#D0D0D0" fill-opacity="0.4" stroke="#4A4A68" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
            <line x1="62" y1="38" x2="80" y2="62" stroke="#4A4A68" stroke-width="2" stroke-linecap="round"/>
            <line x1="80" y1="38" x2="62" y2="62" stroke="#4A4A68" stroke-width="2" stroke-linecap="round"/>
        `, size, label);
    },

    // ─────────────────────────────────
    //  BADGES
    // ─────────────────────────────────

    medal(size = 'md', label = 'Medaille') {
        return this._wrap(`
            <path d="M 38 10 L 44 38 L 50 10 L 56 38 L 62 10" fill="#6B9BD1" fill-opacity="0.3" stroke="#4A4A68" stroke-width="1.2" stroke-linejoin="round"/>
            <circle cx="50" cy="55" r="24" fill="#FFE5A0" fill-opacity="0.5" stroke="#4A4A68" stroke-width="1.8"/>
            <circle cx="50" cy="55" r="18" fill="#FFE5A0" fill-opacity="0.3" stroke="#4A4A68" stroke-width="1"/>
            <path d="M 50 42 L 53 50 L 62 50 L 55 56 L 58 64 L 50 59 L 42 64 L 45 56 L 38 50 L 47 50 Z"
                fill="#FFD080" fill-opacity="0.5" stroke="#4A4A68" stroke-width="0.8"/>
        `, size, label);
    },

    crown(size = 'md', label = 'Champion') {
        return this._wrap(`
            <path d="M 18 68 L 22 30 L 38 50 L 50 20 L 62 50 L 78 30 L 82 68 Z"
                fill="#FFE5A0" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
            <path d="M 22 35 L 38 50 L 50 25 L 62 50 L 78 35 L 80 65 L 20 65 Z"
                fill="#FFD080" fill-opacity="0.3"/>
            <rect x="18" y="65" width="64" height="10" rx="3" fill="#FFE5A0" fill-opacity="0.5" stroke="#4A4A68" stroke-width="1.5"/>
            <circle cx="30" cy="70" r="3" fill="#FFD4E5" fill-opacity="0.6" stroke="#4A4A68" stroke-width="0.8"/>
            <circle cx="50" cy="70" r="3" fill="#B4D4FF" fill-opacity="0.6" stroke="#4A4A68" stroke-width="0.8"/>
            <circle cx="70" cy="70" r="3" fill="#D4FFEA" fill-opacity="0.6" stroke="#4A4A68" stroke-width="0.8"/>
            <circle cx="22" cy="30" r="3" fill="#FFE5A0" fill-opacity="0.7"/>
            <circle cx="50" cy="20" r="3" fill="#FFE5A0" fill-opacity="0.7"/>
            <circle cx="78" cy="30" r="3" fill="#FFE5A0" fill-opacity="0.7"/>
        `, size, label);
    },

    gamepad(size = 'md', label = 'Jouer') {
        return this._wrap(`
            <rect x="15" y="30" width="70" height="40" rx="15" fill="#E5D4FF" fill-opacity="0.5" stroke="#4A4A68" stroke-width="1.8" stroke-linejoin="round"/>
            <rect x="15" y="32" width="70" height="36" rx="14" fill="#E5D4FF" fill-opacity="0.2"/>
            <line x1="30" y1="42" x2="30" y2="58" stroke="#4A4A68" stroke-width="2" stroke-linecap="round"/>
            <line x1="22" y1="50" x2="38" y2="50" stroke="#4A4A68" stroke-width="2" stroke-linecap="round"/>
            <circle cx="62" cy="44" r="4" fill="#FFD4E5" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.2"/>
            <circle cx="72" cy="54" r="4" fill="#B4D4FF" fill-opacity="0.6" stroke="#4A4A68" stroke-width="1.2"/>
        `, size, label);
    },

    refresh(size = 'md', label = 'Reinitialiser') {
        return this._wrap(`
            <path d="M 72 38 A 28 28 0 1 0 76 55" fill="none" stroke="#4A4A68" stroke-width="2" stroke-linecap="round"/>
            <path d="M 72 38 L 80 32 L 80 45 Z" fill="#4A4A68" fill-opacity="0.6"/>
            <circle cx="50" cy="50" r="26" fill="#FFD4E5" fill-opacity="0.15"/>
        `, size, label);
    },
};

// Helper pour repeter une icone
function repeatIcon(iconFn, count, size) {
    if (!SolFunIcons[iconFn]) return '';
    return Array.from({length: count}, () => SolFunIcons[iconFn](size)).join('');
}

// Auto-initialisation : remplace les elements avec data-icon
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-icon]').forEach(el => {
        const iconName = el.dataset.icon;
        const size = el.dataset.iconSize || 'md';
        if (SolFunIcons[iconName]) {
            el.innerHTML = SolFunIcons[iconName](size);
        }
    });
});
