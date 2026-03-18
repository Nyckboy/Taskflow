# Compte Rendu TP4 : MUI vs Bootstrap & Architecture BDD

**École :** EMSI (École Marocaine des Sciences de l'Ingénieur) - Cycle d'Ingénieur
[cite_start]**Projet :** TaskFlow [cite: 2]

---

## 🎨 Partie 1 à 4 : Analyse de l'UI (MUI vs Bootstrap)

[cite_start]**Q1 : Lignes de CSS pour le Header MUI** [cite: 41]
0 ligne de CSS externe. Tout le style est injecté via la prop `sx` (CSS-in-JS). Un fichier CSS classique nécessiterait environ 20 à 40 lignes.

[cite_start]**Q2 : Comparaison de code (MUI vs Bootstrap)** [cite: 120]
* **Plus court :** Bootstrap, grâce à ses classes utilitaires concises.
* **Lisibilité :** Bootstrap est plus lisible pour le HTML/CSS traditionnel. MUI est plus orienté objet/composant, mais le JSX peut vite devenir verbeux.

[cite_start]**Q3 : Préférence de style (`sx` vs `className`)** [cite: 143, 144]
* [cite_start]*(À personnaliser)* La prop `sx` (MUI) est excellente pour centraliser la logique dynamique en JS[cite: 89]. Les `className` (Bootstrap) allègent le JSX et séparent bien la structure du design.

---

## [cite_start]📊 Partie 5 : Tableau Comparatif [cite: 145]

| [cite_start]Critère [cite: 147] | [cite_start]Material UI [cite: 148] | [cite_start]React-Bootstrap [cite: 149] |
| :--- | :--- | :--- |
| [cite_start]**Installation** [cite: 150] | Lourde (multiples packages) | Légère (`bootstrap`, `react-bootstrap`) |
| [cite_start]**Composants utilisés** [cite: 151, 152] | Nombreux (`Box`, `Typography` wrappers) | Basique (Balises HTML standards) |
| [cite_start]**Lignes CSS externes** [cite: 153] | 0 | 0 |
| [cite_start]**Système de style** [cite: 154] | CSS-in-JS (prop `sx`) | Classes utilitaires |
| [cite_start]**Personnalisation** [cite: 155, 156] | `ThemeProvider` global (puissant) | Surcharge de variables SCSS |
| [cite_start]**Responsive** [cite: 157] | Objet dans la prop `sx` | Classes dédiées (ex: `col-md-6`) |
| [cite_start]**Lisibilité** [cite: 158] | JSX verbeux | JSX épuré, chaînes de classes longues |

[cite_start]**Q4 : Choix pour la production** [cite: 161]
* **MUI :** Pour des applications complexes nécessitant un Design System robuste et des composants avancés.
* **Bootstrap :** Pour un développement rapide et un bundle plus léger.

---

## ⚙️ Partie 6 : Architecture BDD

[cite_start]**Schémas d'architecture :** [cite: 163, 164, 165, 166, 167]
* **Actuel :** React (5173) `<-HTTP->` Axios `<-HTTP->` json-server (4000) `<->` `db.json`
* **Firebase :** React `<-SDK Firebase (WebSockets/HTTPS)->` Cloud Firebase
* **Express + DB :** React `<-HTTP->` Serveur Express `<-TCP->` MongoDB/MySQL

[cite_start]**Q5 : Pourquoi React ne se connecte pas directement à MySQL ?** [cite: 168]
1. **Sécurité :** Les identifiants DB seraient visibles dans le code source côté client.
2. **Protocole :** Les navigateurs utilisent HTTP, SQL utilise des protocoles TCP spécifiques.

[cite_start]**Q6 : Inconvénients de json-server en production** [cite: 169]
1. Aucune scalabilité (goulot d'étranglement sur un seul fichier).
2. Aucune sécurité ni authentification.
3. Ne gère pas les requêtes/jointures complexes.

[cite_start]**Q7 : Comment Firebase permet la connexion directe ?** [cite: 170, 171]
Firebase est un Backend-as-a-Service. Il expose une API HTTP/WebSockets sécurisée. La sécurité est assurée côté serveur par des règles validant les tokens d'authentification des utilisateurs.

---

## 🧠 Partie 7 : Questions de Réflexion

[cite_start]**Q8 : Étapes pour passer en production** [cite: 173, 174]
1. Créer un vrai backend (Node.js, Spring Boot) ou utiliser un BaaS.
2. Migrer vers une BDD robuste (PostgreSQL, MongoDB).
3. Implémenter une authentification sécurisée (JWT).
4. Mettre à jour l'URL de base d'Axios.

[cite_start]**Q9 : Risques des librairies externes** [cite: 175, 176]
Augmentation drastique de la taille du bundle JavaScript (ralentit le chargement) et risque de dépendance ("vendor lock-in") en cas de mises à jour bloquantes.

[cite_start]**Q10 : Choix pour un Chat en temps réel** [cite: 177]
**Firebase** (ou Backend custom avec WebSockets). `json-server` utilise du HTTP standard (le client doit demander les données), tandis que Firebase utilise des WebSockets pour "pousser" les messages en temps réel.