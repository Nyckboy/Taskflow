Q1 : <Navigate /> vs Maps(),
  - <Navigate /> s'utilise directement dans ton code JSX (pendant le rendu du composant). Maps() est un hook à utiliser à l'intérieur de fonctions (comme un clic) ou dans un useEffect.
Q2 : Maps(from) vs replace: true 
  - L'option replace: true remplace la page actuelle dans l'historique du navigateur. Cela empêche l'utilisateur d'utiliser le bouton "Retour" pour revenir accidentellement sur la page de connexion.
Q3 : Pourquoi mettre à jour le state plutôt que de refaire un GET ?
  - C'est beaucoup plus rapide pour l'utilisateur. On met à jour l'interface immédiatement avec les nouvelles données renvoyées par l'API (data), ce qui évite de faire travailler le serveur pour rien.
Q5 : <Link> vs <NavLink>, 
  - <NavLink> détecte automatiquement si l'URL correspond à la page actuelle, ce qui permet d'appliquer un style spécifique. 
  - <Link> est un lien basique.
Q6 : POST vs PUT dans le formulaire,
  - Pour le POST (création), le formulaire démarre vide. 
  - Pour le PUT (modification), le formulaire est pré-rempli avec les données (nom et couleur) du projet existant.
Q7 : Comportement si le serveur est éteint,
  - Oui, le message d'erreur s'affiche. Axios détecte l'échec de la connexion et le traite comme une erreur réseau, ce qui déclenche directement ton bloc catch.
Q8 : Axios vs Fetch sur une erreur 404,
  - Fetch ignore les erreurs 404 et les traite comme un succès. 
  - Axios, en revanche, considère automatiquement les 404 comme des erreurs et t'envoie directement dans le bloc catch.

