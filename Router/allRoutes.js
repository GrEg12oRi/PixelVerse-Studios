import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "404", "/html/404.html"),
    new Route("/", "Accueil", "/html/accueil.html"),
    new Route("/", "Contact", "/html/contact.html"),];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "PixelVerse Studios";