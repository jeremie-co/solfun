# Guide des Fonctionnalités - SolFun

Ce document liste toutes les fonctionnalités planifiées pour l'application SolFun, organisées par priorité (MVP, P1, P2).

**Légende des priorités:**
- **MVP**: Minimum Viable Product - Fonctionnalités essentielles pour le lancement
- **P1**: Priorité 1 - Fonctionnalités importantes à ajouter rapidement après le MVP
- **P2**: Priorité 2 - Fonctionnalités avancées pour enrichir l'expérience

---

## 2️⃣ EXERCICES DE LECTURE DE NOTES

### 2.1 Reconnaissance notes - Clé de Sol (MVP)
- [x] **MVP-2.1.1** - Afficher aléatoirement une note sur une portée en clé de Sol
- [x] **MVP-2.1.2** - Générer 5 boutons de réponse (Do, Ré, Mi, Fa, Sol)
- [x] **MVP-2.1.3** - Valider la réponse de l'utilisateur
- [x] **MVP-2.1.4** - Afficher un feedback visuel immédiat (vert=correct, rouge=incorrect)
- [x] **MVP-2.1.5** - Jouer un son de succès ou d'erreur
- [x] **MVP-2.1.6** - Compter les bonnes réponses en temps réel

### 2.2 Reconnaissance notes - Clé de Fa (MVP)
- [x] **MVP-2.2.1** - Afficher aléatoirement une note sur une portée en clé de Fa
- [x] **MVP-2.2.2** - Générer 5 boutons de réponse adaptés à la clé de Fa
- [x] **MVP-2.2.3** - Valider et donner un feedback comme pour clé de Sol

### 2.3 Système de niveaux progressifs (MVP)
- [x] **MVP-2.3.1** - Créer Niveau 1 : 3 notes (Do, Mi, Sol) clé de Sol uniquement
- [x] **MVP-2.3.2** - Créer Niveau 2 : 5 notes (Do, Ré, Mi, Fa, Sol) clé de Sol uniquement
- [x] **MVP-2.3.3** - Créer Niveau 3 : 5 notes en clé de Fa
- [x] **MVP-2.3.4** - Permettre la sélection du niveau avant de commencer

### 2.4 Audio des notes (MVP)
- [x] **MVP-2.4.1** - Jouer automatiquement le son de la note affichée (son de piano)
- [x] **MVP-2.4.2** - Ajouter un bouton "Réécouter" pour répéter le son
- [x] **MVP-2.4.3** - Charger et stocker les fichiers audio des notes (Do à Si)

### 2.5 Extension gamme de notes (P1)
- [ ] **P1-2.5.1** - Étendre à l'octave complète (7 notes : Do à Si)
- [ ] **P1-2.5.2** - Ajouter les notes graves (Do grave à Sol grave)
- [ ] **P1-2.5.3** - Ajouter les notes aiguës (La aigu à Sol aigu)
- [ ] **P1-2.5.4** - Créer Niveau 4 : Octave complète
- [ ] **P1-2.5.5** - Créer Niveau 5 : Notes avec altérations (# et b)

### 2.6 Multi-clés (P1)
- [ ] **P1-2.6.1** - Créer un mode mixte clé de Sol + clé de Fa
- [ ] **P1-2.6.2** - Alterner aléatoirement entre les deux clés
- [ ] **P1-2.6.3** - Indiquer visuellement quelle clé est utilisée

### 2.7 Dictée de notes (P1)
- [ ] **P1-2.7.1** - Jouer une note sans l'afficher
- [ ] **P1-2.7.2** - Demander à l'utilisateur de trouver la note
- [ ] **P1-2.7.3** - Créer des séquences de 2-3 notes à mémoriser
- [ ] **P1-2.7.4** - Valider la séquence complète

### 2.8 Lecture à vue (P2)
- [ ] **P2-2.8.1** - Afficher une partition simple de 4-8 mesures
- [ ] **P2-2.8.2** - Faire défiler automatiquement la partition
- [ ] **P2-2.8.3** - Créer un mode "karaoké" avec surlignage des notes

### 2.9 Intervalles (P2)
- [ ] **P2-2.9.1** - Afficher deux notes simultanément
- [ ] **P2-2.9.2** - Demander d'identifier l'intervalle (seconde, tierce, etc.)
- [ ] **P2-2.9.3** - Créer des exercices de construction d'intervalles
- [ ] **P2-2.9.4** - Jouer l'intervalle pour entraînement de l'oreille

---

## 3️⃣ EXERCICES DE RYTHME

### 3.1 Reconnaissance figures rythmiques (MVP)
- [x] **MVP-3.1.1** - Afficher une figure rythmique (ronde, blanche, noire)
- [x] **MVP-3.1.2** - Proposer 3 choix de réponse
- [x] **MVP-3.1.3** - Valider la réponse avec feedback visuel

### 3.2 Comptage des temps (MVP)
- [x] **MVP-3.2.1** - Afficher une mesure simple (4/4)
- [x] **MVP-3.2.2** - Demander de compter le nombre de temps
- [x] **MVP-3.2.3** - Valider la réponse

### 3.3 Métronome intégré (P1)
- [ ] **P1-3.3.1** - Créer un métronome réglable (60-120 BPM)
- [ ] **P1-3.3.2** - Ajouter un bouton marche/arrêt
- [ ] **P1-3.3.3** - Synchroniser avec les exercices de rythme

### 3.4 Frappe de rythme (P1)
- [ ] **P1-3.4.1** - Afficher un rythme à reproduire
- [ ] **P1-3.4.2** - Permettre de taper le rythme (barre espace ou clic)
- [ ] **P1-3.4.3** - Analyser la précision du rythme tapé
- [ ] **P1-3.4.4** - Donner un score de précision

### 3.5 Rythmes complexes (P2)
- [ ] **P2-3.5.1** - Ajouter croches et double-croches
- [ ] **P2-3.5.2** - Introduire syncopes et contretemps
- [ ] **P2-3.5.3** - Créer des mesures composées (6/8, 9/8)
- [ ] **P2-3.5.4** - Créer des exercices de dictée rythmique

---

## Instructions d'utilisation

1. **Suivi des progrès**: Cochez les cases au fur et à mesure de l'implémentation
2. **Priorités**: Concentrez-vous d'abord sur les fonctionnalités MVP avant de passer aux P1 et P2
3. **Mise à jour**: Mettez à jour ce document régulièrement pour refléter l'avancement du projet
4. **Nouvelles fonctionnalités**: Ajoutez de nouvelles fonctionnalités en suivant la convention de nommage existante

---

**Dernière mise à jour**: 2026-02-13
