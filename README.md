# marshmello

## Fonctionnalités

### Projets

- [ ] Créer un projet
- [ ] Renommer un projet
- [ ] Supprimer un projet (et tous les statuts et toutes les tâches associés)

### Statuts

- [ ] Créer un statut
- [ ] Renommer un statut
- [ ] Supprimer un statut (et déplacer les tâches dans un statut "non classé")
- [ ] Changer l'ordre des statuts

### Tâches

- [ ] Créer une tâche
- [ ] Modifier une tâche
- [ ] Supprimer une tâche
- [ ] Déplacer une tâche d'un statut à un autre
- [ ] Toggle une tâche (terminée/non terminée)

### Utilisateurs

- [X] Créer un compte
- [X] Se connecter
- [X] Se déconnecter
- [ ] Supprimer un compte
- [ ] Modifier ses informations

## Modèles

```yaml
users:
	- id integer PK UNIQUE NOT NULL
	- uuid uuid UNIQUE NOT NULL
	- username varchar(50) UNIQUE NOT NULL
	- password varchar NOT NULL
	- created_at timestamp NOT NULL DEFAULT NOW()
	- updated_at timestamp NOT NULL DEFAULT NOW()

projects:
	- id integer PK UNIQUE NOT NULL
	- uuid uuid UNIQUE NOT NULL
	- name varchar NOT NULL
	- user_id integer FK users.id ON DELETE CASCADE
	- created_at timestamp NOT NULL DEFAULT NOW()
	- updated_at timestamp NOT NULL DEFAULT NOW()

statuses:
	- id integer PK UNIQUE NOT NULL
	- uuid uuid UNIQUE NOT NULL
	- name varchar NOT NULL
	- project_id integer FK projects.id ON DELETE CASCADE
	- order smallint NOT NULL
	- created_at timestamp NOT NULL DEFAULT NOW()
	- updated_at timestamp NOT NULL DEFAULT NOW()

todos:
	- id integer PK UNIQUE NOT NULL
	- uuid uuid UNIQUE NOT NULL
	- name varchar NOT NULL
	- description text NULL DEFAULT NULL
	- completed boolean NOT NULL DEFAULT false
	- status_id integer FK statuses.id ON DELETE SET NULL
	- project_id integer FK projects.id ON DELETE CASCADE
	- created_at timestamp NOT NULL DEFAULT NOW()
	- updated_at timestamp NOT NULL DEFAULT NOW()
```
