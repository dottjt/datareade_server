#!/bin/sh

SERVER_ROOT_FOLDER=/docker/letsencrypt-docker-nginx/src/datareade
CLIENT_ROOT_FOLDER=/Users/julius.reade/Code/PER/datareade_server

cp $CLIENT_ROOT_FOLDER/deployment/environment/.env $CLIENT_ROOT_FOLDER/deployment/docker/prod-build/.env
cd $CLIENT_ROOT_FOLDER/deployment/docker/prod-build

npm run update

git add .
git commit -m 'automated commit'
git push

docker-compose build --no-cache
docker push dottjt/datareade

# git clone https://github.com/dottjt/datareade

rm $CLIENT_ROOT_FOLDER/deployment/docker/prod-build/.env

# nginx docker-compose.yml file
echo 'COMMAND: echo rsync nginx/docker-compose.yml'
scp -r ${CLIENT_ROOT_FOLDER}/deployment/docker/prod/docker-compose.yml root@198.199.67.180:/${SERVER_ROOT_FOLDER}/docker-compose.yml

# .env file
echo 'COMMAND: echo rsync nginx/.env'
scp -r ${CLIENT_ROOT_FOLDER}/deployment/environment/.env root@198.199.67.180:/${SERVER_ROOT_FOLDER}/.env

# # nginx.conf file
# echo 'echo rsync nginx/nginx.conf'
# scp -r ${ROOT_FOLDER}/deployment/nginx-prod.conf root@198.199.67.180:/etc/nginx/sites-available/datareade.juliusreade.com

# # datareadeWebhookServer folder
# echo 'echo rsync nginx/.env'
# scp -r ${ROOT_FOLDER}/deployment/datareadeWebhookServer root@198.199.67.180:/docker/letsencrypt-docker-nginx/src/

ssh root@198.199.67.180 <<EOF
  # echo "COMMAND: ln -s /etc/nginx/sites-available/datareade.juliusreade.com /etc/nginx/sites-enabled/datareade.juliusreade.com"
  # ln -s /etc/nginx/sites-available/datareade.juliusreade.com /etc/nginx/sites-enabled/datareade.juliusreade.com

  # echo "COMMAND: sudo systemctl restart nginx"
  # sudo systemctl restart nginx

  # NOTE: This removes all images without a container.
  echo "COMMAND: echo y | docker image prune -a"
  docker image prune -af

  echo "COMMAND: docker pull dottjt/datareade:latest"
  docker pull dottjt/datareade:latest

  echo "COMMAND: echo cd /docker/letsencrypt-docker-nginx/src/datareade/"
  cd /docker/letsencrypt-docker-nginx/src/datareade/

  echo "COMMAND: echo docker-compose down"
  docker-compose down

  echo "COMMAND: echo docker-compose up -d"
  docker-compose up -d

  echo "COMMAND: echo exit"
  exit
EOF
