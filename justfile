NODE := "docker compose exec node"
PNPM := NODE + " pnpm"
API := NODE + " pnpm -F '@marshmello/api'"
FRONT := NODE + " pnpm -F '@marshmello/front'"

ace +args:
	{{API}} ace {{args}}

pnpm +args:
	{{PNPM}} {{args}}

api +args:
		{{API}} {{args}}

front +args:
		{{FRONT}} {{args}}

ncu pkg="api":
	{{NODE}} ncu -iu --workspace="@marshmello/{{pkg}}"

shell:
	docker compose exec -it node bash

psql:
	docker compose exec -it database bash
