FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm config set strict-ssl false && npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
