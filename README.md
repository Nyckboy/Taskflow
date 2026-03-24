# Compte Rendu TP4 : MUI vs Bootstrap & Architecture BDD

**École :** EMSI (École Marocaine des Sciences de l'Ingénieur) - Cycle d'Ingénieur
**Projet :** TaskFlow

---

## 🎨 Partie 1 à 4 : Analyse de l'UI (MUI vs Bootstrap)

**Q1 : Lignes de CSS pour le Header MUI** 
0 ligne de CSS externe. Tout le style est injecté via la prop `sx` (CSS-in-JS). Un fichier CSS classique nécessiterait environ 20 à 40 lignes.

**Q2 : Comparaison de code (MUI vs Bootstrap)** 
* **Plus court :** Bootstrap, grâce à ses classes utilitaires concises.
* **Lisibilité :** Bootstrap est plus lisible pour le HTML/CSS traditionnel. MUI est plus orienté objet/composant, mais le JSX peut vite devenir verbeux.

**Q3 : Préférence de style (`sx` vs `className`)** 
* *(À personnaliser)* La prop `sx` (MUI) est excellente pour centraliser la logique dynamique en JS. Les `className` (Bootstrap) allègent le JSX et séparent bien la structure du design.

---

## 📊 Partie 5 : Tableau Comparatif 

| Critère  | Material UI  | React-Bootstrap  |
| :--- | :--- | :--- |
| **Installation**  | Lourde (multiples packages) | Légère (`bootstrap`, `react-bootstrap`) |
| **Composants utilisés**  | Nombreux (`Box`, `Typography` wrappers) | Basique (Balises HTML standards) |
| **Lignes CSS externes**  | 0 | 0 |
| **Système de style**  | CSS-in-JS (prop `sx`) | Classes utilitaires |
| **Personnalisation**  | `ThemeProvider` global (puissant) | Surcharge de variables SCSS |
| **Responsive**  | Objet dans la prop `sx` | Classes dédiées (ex: `col-md-6`) |
| **Lisibilité**  | JSX verbeux | JSX épuré, chaînes de classes longues |

**Q4 : Choix pour la production** 
* **MUI :** Pour des applications complexes nécessitant un Design System robuste et des composants avancés.
* **Bootstrap :** Pour un développement rapide et un bundle plus léger.

---

## ⚙️ Partie 6 : Architecture BDD

**Schémas d'architecture :** 
* **Actuel :** React (5173) `<-HTTP->` Axios `<-HTTP->` json-server (4000) `<->` `db.json`
* **Firebase :** React `<-SDK Firebase (WebSockets/HTTPS)->` Cloud Firebase
* **Express + DB :** React `<-HTTP->` Serveur Express `<-TCP->` MongoDB/MySQL

**Q5 : Pourquoi React ne se connecte pas directement à MySQL ?** 
1. **Sécurité :** Les identifiants DB seraient visibles dans le code source côté client.
2. **Protocole :** Les navigateurs utilisent HTTP, SQL utilise des protocoles TCP spécifiques.

**Q6 : Inconvénients de json-server en production** 
1. Aucune scalabilité (goulot d'étranglement sur un seul fichier).
2. Aucune sécurité ni authentification.
3. Ne gère pas les requêtes/jointures complexes.

**Q7 : Comment Firebase permet la connexion directe ?** 
Firebase est un Backend-as-a-Service. Il expose une API HTTP/WebSockets sécurisée. La sécurité est assurée côté serveur par des règles validant les tokens d'authentification des utilisateurs.

---

## 🧠 Partie 7 : Questions de Réflexion

**Q8 : Étapes pour passer en production** 
1. Créer un vrai backend (Node.js, Spring Boot) ou utiliser un BaaS.
2. Migrer vers une BDD robuste (PostgreSQL, MongoDB).
3. Implémenter une authentification sécurisée (JWT).
4. Mettre à jour l'URL de base d'Axios.

**Q9 : Risques des librairies externes** 
Augmentation drastique de la taille du bundle JavaScript (ralentit le chargement) et risque de dépendance ("vendor lock-in") en cas de mises à jour bloquantes.

**Q10 : Choix pour un Chat en temps réel** 
**Firebase** (ou Backend custom avec WebSockets). `json-server` utilise du HTTP standard (le client doit demander les données), tandis que Firebase utilise des WebSockets pour "pousser" les messages en temps réel.