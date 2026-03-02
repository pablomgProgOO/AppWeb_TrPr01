# Backlog - TP01 - Gestionnaire de produits

> **Cours :** 420-W40-SF - Développement d’applications Web (Cégep de Sainte-Foy)  
> **Travail :** TP01 - Gestionnaire de produits  
> **Étudiant(e) :** {{ VPablo Morato Gomez }}
> **Dernière mise à jour :** {{ 2026-02-27 }}


---

## 1) Règles de backlog (à respecter)

- **Tâches petites** : idéalement 25 à 50 minutes.
- **Titres explicites** : “UI liste produits (tableau)” au lieu de “liste”.
- **Critères d’acceptation** : 1 à 3 points simples pour savoir si c’est “done”.
- **Ordre logique** : setup → affichage → interactions → validations → export → déploiement → finitions.
- **Suivi** : on bouge les statuts au fur et à mesure (visible).
- **Légende statut :** ⬜ À faire | 🟦 En cours | ✅ Fait | 🟥 Bloqué
- Priorités
	- **MUST** : requis par l’énoncé (récits 1 à 10 + méthodologie)
	- **SHOULD** : qualité/robustesse (cas limites, petits refactors)
	- **COULD** : bonus / nice-to-have (si tout le reste est stable)
- **IMPORTANT**: renommer backlog.md

---

## 2) Tableau du backlog

> Copiez/collez des lignes au besoin.

|  ID | Priorité | Statut | Titre (tâche) | Relié à (RU#) | Critères d’acceptation (définition de done) | Notes / obstacles |
| --: | :------: | :----: | ------------- | :-----------: | ------------------------------------------- | ----------------- |
|  A1 |   MUST   |   ⬜    |               |               |                                             |                   |
|     |          |        |               |               |                                             |                   |
| A1 |  | MUST | ✅ Fait  | Completer le Html du composant Form | 1-4 | Un formulaire html avec des inputs pour chaque valeur du produit | Aucun obstacle |
| A2 |  | MUST | ✅ Fait  | Completer le Html du composant App | 1-9 | Le composant contient tous les composants | Aucun obstacle |
| A3 |  | MUST | ✅ Fait  | Completer le Html du composant Item | 2-9 | Le composant montre le nom/prix du produit et contient des boutons en rapport des events | Aucun obstacle |
| A4 |  | MUST | ✅ Fait  | Completer le Html du composant List-view | 1-9 | Le composant contient un input de filtre et le composant List | Aucun obstacle |
| A5 |  | MUST | ✅ Fait  | Completer le Html du composant List | 1-9 | Le composant contient une liste de composants Item | Aucun obstacle |
| A6 |  | MUST | ✅ Fait  | Completer le Html du composant Item-view | 1-9 | Le composant montre toutes les valeurs dans une interface Jersey | Aucun obstacle |
| A7 |  | MUST | ✅ Fait  | Lier les composants List-view - List - Item avec App| 1-9 | L'origine des valeurs dans affiches dans les composants viens de les valeurs dans le composant App | Setup lang ="ts" est important |
| A8 |  | MUST | ✅ Fait  | Lier les composants List-view - List| 6 | On peut filtrer la liste selon ce qu'on met dans le input | Aucune note |


