FROM node:21-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

ENV PORT=5000
ENV MONGODB_CONN_STRING=mongodb+srv://ravanadevs:rJ0VENGPo6w9TJiV@cluster0.o9qrp6n.mongodb.net/pm-db?retryWrites=true&w=majority

CMD ["node", "src/server.js"]