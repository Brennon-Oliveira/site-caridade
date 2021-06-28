FROM node:15.11
WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3006