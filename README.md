# 🎮 PixelVerse Studios

<p align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap%205-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

</p>

Application web de gestion de personnages pour **Fantasy Realm Online**, un MMORPG imaginé par **PixelVerse Studios**.

Ce projet permet aux joueurs de créer, consulter et gérer leurs personnages à travers une interface moderne développée en **HTML**, **SCSS**, **Bootstrap** et **JavaScript**.

---

## 📚 Sommaire

- [📖 Présentation](#-présentation)
- [✨ Fonctionnalités](#-fonctionnalités)
- [🛠️ Technologies utilisées](#️-technologies-utilisées)
- [📂 Structure du projet](#-structure-du-projet)
- [📄 Pages disponibles](#-pages-disponibles)
- [🚀 Installation](#-installation)
- [▶️ Lancer le projet](#️-lancer-le-projet)
- [📦 Dépendances](#-dépendances)
- [🗂️ Architecture](#️-architecture)
- [🎨 Objectif du projet](#-objectif-du-projet)
- [📸 Aperçu](#-aperçu)
- [🔮 Évolutions prévues](#-évolutions-prévues)
- [👨‍💻 Auteur](#-auteur)
- [📄 Licence](#-licence)

## 📖 Présentation

PixelVerse Studios est un projet de développement web ayant pour objectif de créer une plateforme dédiée à la gestion des personnages du MMORPG **Fantasy Realm Online**.

L'application offre une navigation fluide grâce à un système de routage JavaScript et propose plusieurs pages permettant aux utilisateurs de consulter leurs personnages, en créer de nouveaux et gérer leur compte.

---

## ✨ Fonctionnalités

- 🏠 Page d'accueil
- 👤 Création de personnage
- 🖼️ Galerie des personnages
- 📋 Consultation des détails d'un personnage
- 📁 Gestion des personnages
- 🔐 Connexion utilisateur
- 📝 Création de compte
- 🔑 Mot de passe oublié
- 📬 Formulaire de contact
- 🚧 Gestion des erreurs (page 404)

---

## 🛠️ Technologies utilisées

### Front-end

- HTML5
- CSS3
- JavaScript ES6 (Modules)
- Bootstrap 5
- Bootstrap Icons

### Outils

- Node.js
- npm
- Docker Compose (configuration présente)
- Prettier

---

## 📂 Structure du projet

```text
PixelVerse-Studios/
│
├── html/
│   ├── index.html          # Point d'entrée de l'application
│   ├── accueil.html        # Présentation de PixelVerse Studios
│   ├── galerie.html        # Galerie des personnages
│   ├── detail.html         # Fiche détaillée d'un personnage
│   ├── create.html         # Création d'un personnage
│   ├── perso.html          # Gestion des personnages
│   ├── log.html            # Connexion
│   ├── register.html       # Création d'un compte
│   ├── password.html       # Mot de passe oublié
│   ├── contact.html        # Formulaire de contact
│   └── 404.html            # Page d'erreur
│
├── css/
│   ├── accueil.css
│   ├── galerie.css
│   ├── detail.css
│   ├── create.css
│   ├── perso.css
│   ├── log.css
│   └── contact.css
│
├── scss/
│   ├── main.scss           # Feuille de style principale
│   ├── _custom.scss        # Variables et personnalisations Bootstrap
│   ├── main.css            # CSS compilé
│   └── main.css.map        # Source map
│
├── Router/
│   ├── Route.js            # Définition d'une route
│   ├── router.js           # Gestionnaire de navigation
│   └── allRoutes.js        # Centralisation des routes
│
├── images/
│   ├── perso1.png
│   └── perso5.png
│
├── Personnages            # Données ou ressources des personnages
│
├── .vscode/
│   └── settings.json       # Configuration de Visual Studio Code
│
├── package.json            # Dépendances et scripts npm
├── package-lock.json       # Verrouillage des dépendances
├── docker-compose.yml      # Configuration Docker
├── .gitignore              # Fichiers ignorés par Git
├── .prettierrc             # Configuration de Prettier
├── launch.json             # Configuration de lancement
├── settings.json           # Paramètres du projet
├── Cas d'utilisation.drawio# Diagramme des cas d'utilisation
├── todo.txt                # Liste des tâches
└── README.md               # Documentation du projet
```

## 📁 Description des dossiers

### 📂 html/

Ce dossier contient toutes les pages de l'application. Chaque page correspond à une fonctionnalité ou une vue spécifique accessible via le routeur JavaScript.

- **index.html** : point d'entrée de l'application.
- **accueil.html** : présentation du studio et du projet.
- **galerie.html** : affichage des personnages disponibles.
- **detail.html** : informations détaillées d'un personnage.
- **create.html** : création d'un personnage.
- **perso.html** : gestion des personnages de l'utilisateur.
- **log.html** : connexion.
- **register.html** : inscription.
- **password.html** : récupération du mot de passe.
- **contact.html** : formulaire de contact.
- **404.html** : page affichée lorsqu'une route est introuvable.

---

### 📂 css/

Regroupe les feuilles de style propres à chaque page du site afin de conserver une architecture claire et modulaire.

Chaque page HTML possède son fichier CSS dédié.

---

### 📂 scss/

Contient les fichiers sources SCSS du projet.

- **main.scss** centralise les imports.
- **_custom.scss** permet de personnaliser Bootstrap (couleurs, variables…).
- **main.css** est le fichier compilé utilisé par le navigateur.

L'utilisation de SCSS facilite la maintenance et l'évolution des styles.

---

### 📂 Router/

Implémente le système de routage de l'application.

- **Route.js** définit le modèle d'une route.
- **router.js** gère la navigation dynamique.
- **allRoutes.js** centralise l'ensemble des routes disponibles.

Cette architecture facilite l'ajout de nouvelles pages sans modifier le fonctionnement global de l'application.

---

### 📂 images/

Contient les illustrations utilisées dans le projet, notamment les visuels des personnages.

---

### 📂 Personnages/

Dossier destiné à regrouper les ressources liées aux personnages du MMORPG.

Il pourra accueillir à terme :

- portraits,
- statistiques,
- classes,
- races,
- équipements,
- données JSON.

---

### 📂 .vscode/

Configuration spécifique du projet pour Visual Studio Code.

Elle permet d'harmoniser l'environnement de développement entre les différents contributeurs.

---

## 📄 Fichiers principaux

| Fichier | Description |
| --------- | ------------- |
| **package.json** | Configuration du projet Node.js et des dépendances |
| **package-lock.json** | Versionnement des dépendances |
| **docker-compose.yml** | Configuration Docker |
| **.gitignore** | Liste des fichiers ignorés par Git |
| **.prettierrc** | Configuration du formateur Prettier |
| **launch.json** | Paramètres de lancement du projet |
| **settings.json** | Configuration générale |
| **Cas d'utilisation.drawio** | Diagramme UML des cas d'utilisation |
| **todo.txt** | Liste des fonctionnalités à développer |
| **README.md** | Documentation du projet |

---

## 📄 Pages disponibles

| Page | Description |
| ------- | ------------- |
| Accueil | Présentation de PixelVerse Studios |
| Galerie | Affichage des personnages |
| Mes personnages | Gestion des personnages de l'utilisateur |
| Créer un personnage | Formulaire de création |
| Détail | Informations complètes d'un personnage |
| Connexion | Authentification |
| Création de compte | Inscription |
| Mot de passe oublié | Réinitialisation du mot de passe |
| Contact | Formulaire de contact |
| 404 | Gestion des pages inexistantes |

---

## 🚀 Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/GrEg12oRi/PixelVerse-Studios.git
```

### 2. Accéder au projet

```bash
cd PixelVerse-Studios
```

### 3. Installer les dépendances

```bash
npm install
```

---

## ▶️ Lancer le projet

Selon votre environnement, plusieurs possibilités :

### Avec un serveur local

Par exemple avec VS Code et l'extension **Live Server**.

ou

```bash
npx serve .
```

Le site sera ensuite accessible depuis votre navigateur.

---

## 📦 Dépendances

- Bootstrap
- Bootstrap Icons

Installation :

```bash
npm install
```

---

## 🗂️ Architecture

Le projet utilise un système de routage JavaScript situé dans :

```
Router/
```

Les routes sont centralisées dans :

```
Router/allRoutes.js
```

Ce système facilite l'organisation des différentes pages de l'application.

---

## 📊 Diagramme des cas d'utilisation

Le diagramme ci-dessous présente les principales interactions entre les utilisateurs et les fonctionnalités de l'application.

<p align="center">
    <img src="./docs/Cas d'utilisation.png" alt="Diagramme des cas d'utilisation" width="900">
</p>

Ce diagramme met en évidence les différentes fonctionnalités accessibles aux utilisateurs, notamment :

- Authentification
- Création de compte
- Gestion des personnages
- Consultation de la galerie
- Création d'un personnage
- Consultation des détails d'un personnage
- Formulaire de contact

---

## 🎨 Objectif du projet

L'objectif est de proposer une interface immersive permettant aux joueurs de **Fantasy Realm Online** de gérer facilement leurs personnages.

Le projet met en pratique :

- l'organisation d'un projet web
- la navigation via un routeur JavaScript
- une interface responsive avec Bootstrap
- la séparation des responsabilités (HTML / CSS / JS)

---

## 📸 Aperçu

Des captures d'écran pourront être ajoutées ici afin de présenter :

- l'accueil
- la galerie
- la création de personnage
- la fiche personnage

---

## 🔮 Évolutions prévues

- Authentification complète
- Sauvegarde en base de données
- API REST
- Gestion des classes et races
- Inventaire
- Statistiques des personnages
- Tableau de bord utilisateur
- Administration

---

## 👨‍💻 Auteur

** Bruna Grégori **

Projet réalisé dans le cadre de la formation Développeur Web.

GitHub :
https://github.com/GrEg12oRi

---

## 📄 Licence

Projet distribué à des fins pédagogiques.

Tous les droits concernant l'univers **Fantasy Realm Online** et **PixelVerse Studios** sont réservés à leur créateur.
Toute reproduction ou réutilisation nécessite l'autorisation de l'auteur. 