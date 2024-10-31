FROM node:20.11.1

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]