include .env
-include .env.local

current-dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))

CACHE=node-cache node
VOL_CACHE?=$(shell docker volume inspect -f '{{ index .Mountpoint }}' cache)

##> Project
.env.local:
	@touch .env.local

docker-compose.yaml:
	@cp docker-compose.yaml.dist docker-compose.yaml
	@sed -i "s/<DOCKER_USER_ID>/$(shell $(shell echo id -u ${USER}))/g" $@
	@sed -i "s/<DOCKER_USER>/$(shell echo ${USER})/g" $@

node_modules:
	@docker-compose exec node npm install

cache: $(CACHE)
$(CACHE): .docker-cache
	@if [ ! -d "$(VOL_CACHE)/$@" ]; then \
	sudo mkdir -pm 777 $(VOL_CACHE)/$@; \
	fi;

.INTERMEDIATE: .docker-cache

.docker-cache:
	@touch .docker-cache
	@docker volume create --name=cache;

setup: .env.local docker-compose.yaml

containers: setup .docker-cache
	@echo "Starting services"
	@docker-compose up -d --remove-orphans

stop:
	@docker-compose down

clean:
	@if [ -f "./docker-compose.yaml" ]; then \
		docker-compose down; \
	fi;
	@sudo rm -rf docker-compose.yaml node_modules

start: containers
	@echo "All services should be running."
	@echo "You can access services with the root links."
	@echo "    Frontend: http://localhost:3000/"
	@echo "Ports may differ if overridden in the .env.local file."

build:
	docker-compose run node npm run-script build

install:
	docker-compose run node npm install

.PHONY: run build install

