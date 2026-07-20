# ⚡ Client-Side File Converter

> **Convertisseur de fichiers en ligne 100% local, gratuit et respectueux de la vie privée.**  
> Convertissez vos images, documents et fichiers média directement dans votre navigateur grâce au traitement côté client (WebAssembly). Aucun transfert vers un serveur distant, zéro coût d'infrastructure.

---

## 📌 Présentation

Cette application web propose une alternative **sûre, gratuite et illimitée** aux convertisseurs en ligne traditionnels. 

Contrairement aux services classiques qui envoient vos données sur des serveurs tiers (présentant des risques de confidentialité et des coûts d'infrastructure élevés), cet outil effectue **100% des traitements localement** sur la machine de l'utilisateur grâce aux capacités modernes des navigateurs web.

---

## 🌟 Pourquoi cette architecture (Client-Side) ?

- 🔒 **Confidentialité & RGPD Native** : Vos fichiers ne quittent **jamais** votre appareil. Aucune donnée n'est téléversée sur un serveur distant.
- ⚡ **Performances locales** : Traitement tirant parti de la puissance de calcul du processeur de l'utilisateur (CPU/GPU) via WebAssembly.
- 💸 **100% Gratuit & Illimité** : Pas de restriction de taille artificielle, pas de quota journalier, pas d'inscription requise.
- 💰 **Coût d'Infrastructure Négligeable** : Hébergement 100% statique (Vercel / Cloudflare Pages) ne nécessitant aucun serveur de calcul lourd ni stockage cloud.

---

## ✨ Fonctionnalités Principales

- 🖼️ **Conversion d'Images** : PNG, JPG, WEBP, AVIF, SVG (redimensionnement, compression, changement de format).
- 📄 **Conversion de Documents** : Manipulation et conversion de fichiers PDF, texte, etc.
- 🎵 **Conversion Média (Audio/Vidéo)** : Extraction audio, conversion de formats via WebAssembly.
- 📦 **Traitement par Lot (Batch Processing)** : Convertissez plusieurs fichiers simultanément sans impacter un serveur.
- 👁️ **Aperçu en Direct** : Prévisualisation immédiate avant et après conversion.

---

## 🛠️ Stack Technique

| Domaine | Technologie | Usage / Rôle |
| :--- | :--- | :--- |
| **Framework Web** | **Next.js** (App Router) / **React** | Interface utilisateur dynamique et réactive |
| **Langage** | **TypeScript** | Typage strict de l'application |
| **Moteur de Conversion** | **WebAssembly (FFmpeg.wasm)** | Exécution de binaires de conversion dans le navigateur |
| **APIs Web Natives** | **Web Workers, File System API** | Manipulation d'images, multithreading et gestion de fichiers |
| **Styling & UI** | **Tailwind CSS** | Design moderne, responsive et accessible |
| **Hébergement** | **Vercel** | Distribution statique ultra-rapide (CDN) |
