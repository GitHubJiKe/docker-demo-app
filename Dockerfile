FROM node:latest

WORKDIR /usr/src/app

COPY package.json .

RUN yarn install --production

COPY . .

EXPOSE 3000

CMD [ "node" ,"src/index.js"]