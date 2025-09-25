# 🔧 Scripts Utilitaires - Portfolio Tim

Ce dossier contient les scripts Node.js utilisés pour la maintenance et la validation du projet Portfolio Tim.

## 📜 Scripts Disponibles

### 🔍 `validate-json.js`

**Description** : Validation des fichiers JSON contre le schéma défini

**Usage** :

```bash
npm run validate
# ou
node scripts/validate-json.js
```

**Fonctionnalités** :

- ✅ Validation de la syntaxe JSON
- ✅ Validation contre le schéma `data/schema.json`
- ✅ Vérification des champs obligatoires
- ✅ Rapport d'erreurs détaillé
- ✅ Support des formats AJV (dates, emails, etc.)

**Fichiers validés** :

- `data/members.json`
- `data/operations.json`
- `data/press.json`
- `data/portfolio.json`

**Exemple de sortie** :

```
🔍 Validation des fichiers JSON Portfolio Tim
==================================================
✅ members.json - Valide
✅ portfolio.json - Valide
✅ operations.json - Valide
✅ press.json - Valide
==================================================
🎉 Tous les fichiers JSON sont valides !
```

### 🧪 `test-json.js`

**Description** : Tests complets de validation avec vérification de structure

**Usage** :

```bash
npm run test:json
# ou
node scripts/test-json.js
```

**Fonctionnalités** :

- ✅ Tests de validation JSON complets
- ✅ Vérification de la structure des données
- ✅ Tests des champs obligatoires
- ✅ Validation des références entre fichiers
- ✅ Rapport détaillé des tests

**Tests effectués** :

- Validation de syntaxe JSON
- Validation contre le schéma
- Vérification des tableaux (members, operations, communiques)
- Vérification des champs obligatoires
- Comptage des éléments

**Exemple de sortie** :

```
🧪 Tests de validation JSON Portfolio Tim
==================================================
✅ Schéma chargé avec succès
✅ portfolio.json - Valide
✅ members.json - Valide
✅ operations.json - Valide
✅ press.json - Valide

🔍 Tests de structure des données
----------------------------------------
✅ members.json contient 6 membres
✅ operations.json contient 3 opérations
✅ press.json contient 3 communiqués

==================================================
🎉 Tous les tests de validation JSON passent !
```

### 🖼️ `blur-images.js`

**Description** : Traitement automatique des images des membres

**Usage** :

```bash
npm run blur
# ou
node scripts/blur-images.js
```

**Fonctionnalités** :

- ✅ Flou gaussien des images
- ✅ Watermark "CLASSIFIED"
- ✅ Redimensionnement automatique
- ✅ Conversion WebP
- ✅ Optimisation pour le web
- ✅ Gestion des erreurs

**Processus de traitement** :

1. **Lecture** des images sources dans `assets/members-src/`
2. **Application** du flou gaussien (rayon 15px)
3. **Ajout** du watermark "CLASSIFIED"
4. **Redimensionnement** à 400x400px
5. **Conversion** en format WebP
6. **Sauvegarde** dans `public/members/`

**Formats supportés** :

- **Entrée** : JPG, PNG, WebP
- **Sortie** : WebP optimisé

**Exemple de sortie** :

```
🖼️ Traitement des images Portfolio Tim
==================================================
📁 Dossier source: assets/members-src/
📁 Dossier destination: public/members/

🔄 Traitement de shadow.jpg...
✅ Image traitée: shadow_blur.webp (400x400, 45.2 KB)

🔄 Traitement de raven.png...
✅ Image traitée: raven_blur.webp (400x400, 38.7 KB)

==================================================
🎉 Traitement terminé ! 6 images traitées.
```

## 🔧 Configuration

### Dépendances Requises

```json
{
  "ajv": "^8.17.1",
  "ajv-formats": "^2.1.1",
  "sharp": "^0.33.5"
}
```

### Structure des Dossiers

```
scripts/
├── validate-json.js    # Validation des données
├── test-json.js        # Tests complets
├── blur-images.js      # Traitement des images
└── README.md          # Cette documentation

data/
├── schema.json         # Schéma de validation
├── members.json        # Données des membres
├── operations.json     # Données des opérations
├── press.json          # Communiqués de presse
└── portfolio.json      # Infos portfolio

assets/members-src/     # Images sources
public/members/         # Images traitées
```

## 🚨 Gestion des Erreurs

### Erreurs de Validation

**Erreur de syntaxe JSON** :

```
❌ members.json - Erreur de syntaxe: Unexpected token } in JSON at position 123
```

**Erreur de schéma** :

```
❌ members.json - Erreurs de validation:
   - /0/codeName: must be string
   - /1/status: must be equal to one of the allowed values
```

### Erreurs de Traitement d'Images

**Image source manquante** :

```
❌ Erreur: Image source non trouvée: assets/members-src/member.jpg
```

**Erreur de traitement** :

```
❌ Erreur lors du traitement de member.jpg: Input file is missing
```

## 🔄 Intégration CI/CD

### GitHub Actions

Les scripts sont intégrés dans les workflows GitHub Actions :

1. **`validate-json.yml`** : Exécute `npm run validate`
2. **`blur-images.yml`** : Exécute `npm run blur`
3. **`build-check.yml`** : Exécute `npm run lint` et `npm run build`

### Workflow de Développement

1. **Modifier** les données JSON
2. **Valider** : `npm run validate`
3. **Tester** : `npm run test:json`
4. **Traiter** les images : `npm run blur`
5. **Commit** et push
6. **Vérifier** les GitHub Actions

## 📊 Métriques et Performance

### Validation JSON

- **Temps d'exécution** : ~100ms
- **Fichiers traités** : 4 fichiers JSON
- **Mémoire utilisée** : ~10MB

### Traitement d'Images

- **Temps d'exécution** : ~2-5s par image
- **Taille moyenne** : 40-60KB par image
- **Compression** : ~80% de réduction

### Tests Complets

- **Temps d'exécution** : ~200ms
- **Tests effectués** : 15+ validations
- **Couverture** : 100% des fichiers

## 🛠️ Développement

### Ajouter un Nouveau Script

1. **Créer** le fichier dans `scripts/`
2. **Ajouter** le script dans `package.json`
3. **Documenter** dans ce README
4. **Tester** localement
5. **Intégrer** dans les GitHub Actions si nécessaire

### Modifier un Script Existant

1. **Tester** les modifications localement
2. **Vérifier** la compatibilité avec les GitHub Actions
3. **Mettre à jour** la documentation
4. **Tester** sur un fichier de test

## 📝 Logs et Debugging

### Niveaux de Log

- **✅ Succès** : Opérations réussies
- **❌ Erreur** : Erreurs critiques
- **🔄 Traitement** : Opérations en cours
- **📁 Fichiers** : Informations sur les fichiers

### Debugging

Pour activer le mode debug, modifier les scripts :

```javascript
const DEBUG = true;
if (DEBUG) {
  console.log('Debug info:', data);
}
```

---

**Note** : Tous les scripts sont conçus pour être exécutés dans l'environnement Node.js du projet et sont intégrés dans le workflow de développement.
