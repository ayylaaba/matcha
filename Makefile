# Variables
DOCKER_COMPOSE = docker-compose

# Build all services
build:
	$(DOCKER_COMPOSE) build

# Run all services (foreground)
up:
	$(DOCKER_COMPOSE) up

# Run all services in detached mode
upd:
	$(DOCKER_COMPOSE) up -d

# Stop all services
down:
	$(DOCKER_COMPOSE) down

# View logs of all services
logs:
	$(DOCKER_COMPOSE) logs -f

# Restart (down + up -d)
restart: down upd

# Rebuild (down + build + up -d)
rebuild: down build upd

# Clean up dangling resources
clean:
	docker system prune -f
