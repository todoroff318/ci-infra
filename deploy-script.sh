#!/bin/bash

IMAGES="todoroff318/testfr:testfr todoroff318/test:test"

echo "Removing specified Docker images..."
for IMAGE in $IMAGES; do
  docker rmi $IMAGE || echo "Failed to remove $IMAGE or image not found"
done

echo "Pulling latest images..."
docker-compose pull

echo "Starting services..."
docker-compose up -d
