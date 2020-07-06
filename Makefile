run:
	docker-compose run node

build:
	docker-compose run node npm run-script build

.PHONY: run build