run:
	docker-compose run node

build:
	docker-compose run node npm run-script build

install:
	docker-compose run node npm install

.PHONY: run build install

