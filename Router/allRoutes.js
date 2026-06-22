import Route from "./Route.js"

//Définir ici vos routes
export const allRoutes = [
  new Route("/html/index.html", "Accueil", "/html/accueil.html"),
  new Route("/html/galerie.html", "Galerie des personnages", "/html/galerie.html"),
  new Route("/html/perso.html", "Mes Personnages", "/html/perso.html"),
  new Route("/html/create.html", "Créer un personnage", "/html/create.html"),
  new Route("/html/detail.html", "Détails du personnage", "/html/detail.html"),
  new Route("/html/contact.html", "Contact", "/html/contact.html"),
  new Route("/html/log.html", "Connexion", "/html/log.html"),
  new Route("/html/register.html", "Création de compte", "/html/register.html"),
  new Route("/html/password.html", "Mot de passe oublié", "/html/password.html"),
]

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "PixelVerse Studios"
