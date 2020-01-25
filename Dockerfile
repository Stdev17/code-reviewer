FROM node:12

WORKDIR /home/leta/Github/code-reviewer

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]