NODE := "docker compose exec node"
PNPM := NODE + " pnpm"
API := NODE + " pnpm -F '@marshmello/api'"
FRONT := NODE + " pnpm -F '@marshmello/front'"
UI := NODE + " pnpm -F '@marshmello/ui'"

ace +args:
	{{API}} ace {{args}}

pnpm +args:
	{{PNPM}} {{args}}

api +args:
		{{API}} {{args}}

front +args:
		{{FRONT}} {{args}}

ui +args:
	{{UI}} {{args}}

ncu pkg="api":
	{{NODE}} ncu -iu --workspace="@marshmello/{{pkg}}"

shell:
	docker compose exec -it node bash

psql:
	docker compose exec -it database bash

purge:
	{{NODE}} rm -rf /home/node/app/node_modules /home/node/app/.pnpm-store /home/node/app/packages/api/node_modules /home/node/app/packages/front/node_modules /home/node/app/packages/ui/node_modules
	{{NODE}} pnpm install
