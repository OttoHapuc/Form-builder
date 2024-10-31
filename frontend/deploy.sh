#!/bin/bash 

git pull origin main
docker-compose -f ../docker-compose-prod.yml up frontend -d --build
