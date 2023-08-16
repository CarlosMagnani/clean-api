FROM node:latest

WORKDIR /usr/clean-api

COPY . .

RUN npm install

CMD [ "npm", "run", "dev" ]

EXPOSE 4040