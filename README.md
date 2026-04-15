### Q1 : Comparez la structure de votre projet React (Vite) avec Next.js. Quelles différences ?

| Caractéristique | React (Vite) | Next.js (App Router) |
| :--- | :--- | :--- |
| **Routage** | Manuel (via `react-router-dom`). | Automatique (basé sur le système de fichiers dans `/app`). |
| **Rendu (Rendering)** | Client-side Rendering (CSR) par défaut. | Server-side Rendering (SSR) ou Static Site Generation (SSG). |
| **Structure des fichiers** | Libre (souvent `src/components`, `src/pages`). | Conventionnelle (`page.tsx`, `layout.tsx`, `loading.tsx`). |
| **Data Fetching** | `useEffect` ou bibliothèques comme TanStack Query. | Directement dans les Server Components (async/await). |
| **Optimisation** | Configuration manuelle des images/fonts. | Optimisation native via `next/image` et `next/font`. |
| **API** | Nécessite un backend séparé. | Route Handlers intégrés (`api/route.ts`). |

**En résumé :** Vite est un outil de build léger pour des Single Page Applications (SPA), tandis que Next.js est un framework complet offrant des performances optimisées grâce au rendu côté serveur et une structure de projet imposée par des conventions.

---

### Q2 : Comparaison de la création de routes (Next.js vs React Router)

**Nombre de fichiers créés pour la route `/login` :** > **1 seul fichier** (`app/login/page.tsx`).

---

### Comparatif du processus :

| Étape | React Router (Vite) | Next.js (App Router) |
| :--- | :--- | :--- |
| **1. Création** | Créer le fichier `Login.tsx`. | Créer le dossier `login/` + `page.tsx`. |
| **2. Importation** | Importer `Login` dans `App.tsx` ou `main.tsx`. | **Automatique** (aucune importation). |
| **3. Définition** | Ajouter `<Route path="/login" element={<Login />} />`. | **Automatique** (le dossier définit l'URL). |

**Conclusion :** Next.js simplifie le développement en supprimant l'étape de configuration manuelle. Le **File-based Routing** (routage par fichiers) permet de créer une route simplement en organisant ses dossiers, réduisant ainsi les risques d'erreurs d'importation et le code inutile ("boilerplate").

---

### Q3 : Récupération de l'ID : Next.js vs React (useParams)

**Méthode de récupération dans Next.js :**
Dans le App Router, l'identifiant (`id`) est passé directement en tant que **prop** (`params`) à votre composant de page.

---

### Q5 : Chargement des données : React SPA vs Next.js (Server Components)

**Nombre de lignes estimé :**
* **React SPA :** Environ **15 à 20 lignes** de code (gestion des états, du cycle de vie et du fetch).
* **Next.js :** Environ **3 à 5 lignes** de code.

---

### Q6 : Inspection Réseau (F12 > Network)

**Observation :** Non, vous ne verrez **pas** de requête `GET /projects` dans l'onglet Network (Réseau) de votre navigateur.

### Pourquoi ?

1. **Exécution Côté Serveur (Server-side) :** Contrairement à une application React classique (Vite), où le navigateur exécute le JavaScript pour appeler l'API, Next.js effectue cet appel directement sur le **serveur**.

2. **Rendu HTML Complet :** Le serveur récupère les données, génère le HTML final avec les données déjà incluses, et l'envoie au navigateur. Le navigateur reçoit donc une page prête à l'affichage sans avoir besoin d'effectuer d'appels API supplémentaires pour le contenu initial.

---

### Q8 : Équivalent de useNavigate() dans Next.js

**L'équivalent est le hook `useRouter()` du module `next/navigation`.**

---

### Q9 : Inspection du Code Source (Vite vs Next.js)

**Observation sur React (Vite) :** En faisant `Ctrl+U`, on ne voit pratiquement **rien** dans le `<body>`. 
* On trouve une balise `<div id="root"></div>` vide.
* **Les noms des projets ne sont pas présents** dans le code source.

---

### Q10 : Inspection du Code Source (Next.js)

**Observation sur Next.js :** En faisant `Ctrl+U`, on voit un code HTML **complet**.
* **Oui, les noms des projets sont bien présents** directement dans le code source envoyé par le serveur.

---

### Q11 : Persistance du Header
**Question :** Le Header dans `layout.tsx` ne se re-monte pas quand on navigue. En React Router, comment faisait-on ?
**Réponse :** En **React Router**, on devait utiliser un composant parent englobant ou un système de **`<Outlet />`**. Le Header était placé en dehors du bloc de routes pour ne pas être impacté par les changements d'URL.

### Q12 : Layout spécifique au Dashboard
**Question :** Où créer le fichier pour un layout spécifique (ex: avec Sidebar) ?
**Réponse :** Il faut créer le fichier dans **`app/dashboard/layout.tsx`**. Toutes les pages dans le dossier `/dashboard` en hériteront automatiquement.

### Q13 : Server Component et onClick
**Question :** Le Dashboard est un Server Component. Peut-il utiliser `onClick` ?
**Réponse :** **Non**. Les Server Components sont rendus sur le serveur et envoyés sous forme de HTML statique. Le `onClick` nécessite du JavaScript interactif, ce qui impose d'utiliser la directive `'use client'`.

### Q14 : Granularité des Client Components
**Question :** Pour ajouter un bouton interactif sur le Dashboard, faut-il transformer TOUTE la page en Client Component ?
**Réponse :** **Non**. La bonne pratique est d'isoler uniquement le bouton dans un composant séparé (ex: `AddProjectButton.tsx`) avec `'use client'`, puis de l'importer dans la page Dashboard qui reste un Server Component.

### Q15 : Avantage de sécurité (Server-side Fetch)
**Question :** Quel avantage apporte le fait que le navigateur ne voie jamais l'URL de l'API (:4000) ?
**Réponse :** 1. **Masquage :** L'URL réelle de votre serveur de données reste invisible pour l'utilisateur.
2. **Confidentialité :** Vous pouvez utiliser des clés d'API secrètes dans votre `fetch` sans qu'elles soient exposées dans l'onglet "Réseau" du navigateur.

---

### Résumé des commandes utiles
* **Initialisation :** `pnpm create next-app@latest`
* **Développement :** `pnpm dev`
* **Build :** `pnpm build`