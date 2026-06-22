import Route from "./Route.js"
import { allRoutes, websiteName } from "./allRoutes.js"

// Création d'une route pour la page 404 (page introuvable)
const route404 = new Route("404", "Page introuvable", "/html/404.html")

const getCurrentContentContainer = () => {
  return document.getElementById("main-page") || document.querySelector("main")
}

const updateRouteAssets = (parsedDocument) => {
  document.querySelectorAll("[data-route-asset='true']").forEach((element) => element.remove())

  parsedDocument.querySelectorAll("link[rel='stylesheet']").forEach((link) => {
    const href = link.getAttribute("href")
    if (!href) {
      return
    }

    const alreadyLoaded = Array.from(document.querySelectorAll("link[rel='stylesheet']")).some(
      (existingLink) => existingLink.getAttribute("href") === href,
    )

    if (!alreadyLoaded) {
      const styleLink = document.createElement("link")
      styleLink.setAttribute("rel", "stylesheet")
      styleLink.setAttribute("href", href)
      styleLink.setAttribute("data-route-asset", "true")
      document.head.appendChild(styleLink)
    }
  })

  parsedDocument.querySelectorAll("script[src]").forEach((script) => {
    const src = script.getAttribute("src")
    if (!src || src.includes("Router/router.js")) {
      return
    }

    const alreadyLoaded = Array.from(document.querySelectorAll("script[src]")).some(
      (existingScript) => existingScript.getAttribute("src") === src,
    )

    if (!alreadyLoaded) {
      const scriptTag = document.createElement("script")
      scriptTag.setAttribute("type", "text/javascript")
      scriptTag.setAttribute("src", src)
      scriptTag.setAttribute("data-route-asset", "true")
      document.body.appendChild(scriptTag)
    }
  })
}

// Fonction pour récupérer la route correspondant à une URL donnée
const getRouteByUrl = (url) => {
  let currentRoute = null
  const normalizedUrl = url.split("?")[0].split("#")[0]

  allRoutes.forEach((element) => {
    if (element.url == normalizedUrl) {
      currentRoute = element
    }
  })

  if (currentRoute != null) {
    return currentRoute
  }

  return route404
}

// Fonction pour charger le contenu de la page
const LoadContentPage = async () => {
  const path = window.location.pathname
  // Récupération de l'URL actuelle
  const actualRoute = getRouteByUrl(path)
  // Récupération du contenu HTML de la route
  const html = await fetch(actualRoute.pathHtml).then((data) => data.text())
  const parsedDocument = new DOMParser().parseFromString(html, "text/html")
  const contentContainer = getCurrentContentContainer()
  const pageMain = parsedDocument.querySelector("main")
  const content = pageMain ? pageMain.innerHTML : parsedDocument.body.innerHTML

  // Ajout du contenu HTML à l'élément avec l'ID "main-page"
  if (contentContainer != null) {
    contentContainer.innerHTML = content
  }

  updateRouteAssets(parsedDocument)

  // Changement du titre de la page
  document.title = actualRoute.title + " - " + websiteName
}

// Fonction pour gérer les événements de routage (clic sur les liens)
const routeEvent = (event) => {
  event = event || window.event

  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return
  }

  const clickedElement = event.target instanceof Element ? event.target : null
  const anchor = clickedElement ? clickedElement.closest("a") : null

  if (anchor == null) {
    return
  }

  const href = anchor.getAttribute("href")
  if (
    !href ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    anchor.target === "_blank" ||
    anchor.hasAttribute("download")
  ) {
    return
  }

  const destination = new URL(anchor.href, window.location.origin)
  if (destination.origin !== window.location.origin) {
    return
  }

  event.preventDefault()
  window.history.pushState({}, "", destination.pathname + destination.search + destination.hash)
  LoadContentPage()
}

// Gestion de l'événement de retour en arrière dans l'historique du navigateur
window.onpopstate = LoadContentPage
document.addEventListener("click", routeEvent)
// Assignation de la fonction routeEvent à la propriété route de la fenêtre
window.route = routeEvent
// Chargement du contenu de la page au chargement initial
LoadContentPage()
