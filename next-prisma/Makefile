up:
	docker compose up -d
up.build:
	docker compose up -d --build
db:
	docker exec -it db /bin/bash
migrate: 
	npx prisma migrate dev --name init
format:
	npx prisma format
studio:  
	npx prisma studio
