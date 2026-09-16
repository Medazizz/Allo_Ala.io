# Allo..Ala — site vitrine

Projet React (Vite) de la page de liens Allo..Ala.

## Démarrer

Prérequis : [Node.js](https://nodejs.org) version 18 ou plus.

```bash
npm install
npm run dev
```

Puis ouvre l'adresse affichée dans le terminal (en général http://localhost:5173).
La page se recharge toute seule à chaque fois que tu sauvegardes un fichier.

## Modifier les liens et le numéro

Tout est dans `src/links.js`. C'est le seul fichier à toucher pour changer
le numéro de téléphone ou les adresses des réseaux sociaux.

## Changer les couleurs

Les couleurs sont des variables en haut de `src/App.css`, dans le bloc `:root`.
Modifie `--navy` et `--orange` et toute la page suit.

## Mettre en ligne

```bash
npm run build
```

Cela crée un dossier `dist`. Fais glisser ce dossier sur
[app.netlify.com/drop](https://app.netlify.com/drop) et le site est en ligne.

## Structure

```
index.html          page HTML de base (titre, polices, aperçu réseaux sociaux)
public/logo.png     le logo
src/main.jsx        point d'entrée React
src/App.jsx         la page
src/App.css         tous les styles
src/links.js        >>> tes liens et ton numéro <<<
src/Icons.jsx       les icônes SVG
```
