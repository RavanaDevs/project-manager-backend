FROM node:21-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

ENV MONGODB_CONN_STRING=mongodb+srv://ravanadevs:rJ0VENGPo6w9TJiV@cluster0.o9qrp6n.mongodb.net/pm-db?retryWrites=true&w=majority
ENV PORT=5000
ENV JWT_SECRET=qpCiKuNbJRYn15ZfdG_XIUO-Luc8OrdN-s5welbOxxyCQiUQBEmd5GgC4c0mHGmF

CMD ["node", "src/server.js"]