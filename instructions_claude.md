# 🎯 CONTEXTE GLOBAL ET OBJECTIF DU SITE
Tu es un développeur Front-End Expert (HTML/CSS/JS) spécialisé dans le design "Apple-esque" (minimalisme, typographie parfaite, animations ultra-fluides, interface haut de gamme).

## Identité de la Marque
- **Nom de l'entreprise :** Flux Studio AI
- **Gérant :** Thomas Olivier Sylvain Finkelstein
- **Localisation :** Les Cluses (66480)
- **Mentions obligatoires (Footer) :** SIRET 101 660 249 00018 - Code APE 62.01Z

## 📂 Architecture du Projet
Ne fais pas tout dans un seul fichier. Le projet doit respecter cette structure de dossiers propre :
- `/index.html` (Structure principale)
- `/css/style.css` (Styles personnalisés et animations, en complément de Tailwind)
- `/js/app.js` (Logique des animations et gestion des langues)
- `/js/translations.js` (Dictionnaire contenant les textes FR, EN, ES)
- `/assets/img/` (Dossier contenant déjà le logo du site, utilise des placeholders propres ou le logo existant)

## 🌍 Fonctionnalité Multilingue (i18n)
- Le site doit être disponible en 3 langues : **Français (défaut), Anglais et Espagnol**.
- Intègre un sélecteur de langue minimaliste et élégant dans la barre de navigation (ex: menu déroulant discret ou boutons FR | EN | ES avec effet glassmorphism).
- Gère le changement de langue dynamiquement en JavaScript (sans recharger la page), en utilisant le fichier `/js/translations.js` contenant un objet JSON ou dictionnaire pour toutes les chaînes de caractères.

## 🎨 Philosophie de l'Expérience Utilisateur (UX) & Design
L'objectif est de captiver l'utilisateur dès la première seconde. 
Il ne doit y avoir AUCUN bouton "Contact" agressif en arrivant sur le site. L'utilisateur doit d'abord vivre une expérience visuelle.

### 1. Hero Section (L'arrivée dynamique)
- C'est le cœur du site. Pas de vidéo, tout se fait via des animations HTML/CSS/JS fluides.
- L'écran d'accueil est dynamique et boucle sur 3 états avec des transitions douces (crossfade).
- L'animation simule une IA qui travaille en arrière-plan sur mes 3 cibles :
  * **État 1 (Immobilier) :** "Résumé Prospect : Budget 450k€ validé. Critère : Cuisine ouverte."
  * **État 2 (Gîtes) :** "Contrat de location généré - Signature effectuée."
  * **État 3 (Finance) :** "Facture analysée > Données extraites vers Excel."
  *(Note : Ces textes devront être traduits dans le système multilingue).*

### 2. La Bento Grid (Le Scroll)
- En dessous de la Hero Section, une grille asymétrique aux coins très arrondis (minimum 28px).
- Fond de page très légèrement gris (`#f5f5f7`) et cartes blanches pures pour créer un contraste élégant.
- Les cartes expliquent simplement l'expertise (n8n, Python, IA) et les bénéfices (Gain de temps, Zéro erreur).

### 3. Footer Légal
- Très sobre, texte petit et gris clair.
- Doit inclure mon nom complet, l'adresse aux Cluses, le SIRET et le code APE.

## ⚙️ Contraintes Techniques
- Utilise Tailwind CSS (via CDN ou configuré) pour la structure, et le fichier CSS externe pour les `keyframes` ou effets spécifiques complexes (glassmorphism pointu, gradients animés).
- Mobile-first obligatoire (design parfaitement adapté aux smartphones).
- Code propre, indenté, et hautement commenté.