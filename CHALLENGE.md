# Challenge S1

## Développement d'une nouvelle feature

### Objectif

Le but de ce challenge est de développer une nouvelle feature pour l'application : un système de tags pour les tâches.
Chaque tâche peut avoir 0 ou 1 tag, et chaque tag peut être associé à plusieurs tâches.

### Spécifications

- [ ] Le model `Tag` aura les attributs suivants :
  - `id` (int, primary key, auto increment)
  - `uuid` (uuid, unique)
  - `name` (string, unique)
  - `todos` (relation avec le model `Todo`)
  - `created_at` (datetime)
  - `updated_at` (datetime)

- [ ] Les routes suivantes devront être ajoutées :
	- [ ] `GET /tags` : retourne la liste de tous les tags
	- [ ] `GET /tags/:uuid` : retourne les informations d'un tag
	- [ ] `POST /tags` : crée un nouveau tag
	- [ ] `PUT /tags/:uuid` : met à jour un tag
	- [ ] `DELETE /tags/:uuid` : supprime un tag

- [ ] Le model `Todo` devra être modifié pour ajouter une relation avec le model `Tag`.

- [ ] Les routes de création et modification de tag devront être validées avec les règles suivantes :
	- `name` est obligatoire et doit faire entre 2 et 30 caractères inclus

- [ ] Les routes de création et modification de todo devront être modifiées pour permettre d'associer un tag à une tâche.
  - `tag` doit être l'uuid d'un tag existant, et doit être optionnel

- [ ] Vous devrez tester les routes avec des tests fonctionnels, comme les autres CRUD de l'application.

### Rendu

Créer un fork de mon repository https://github.com/aureliendevaux/marshmello et bien le laisser en public pour que 
je puisse y accéder.

**Date limite : 12 février à 12h00**

