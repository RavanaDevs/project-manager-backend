FROM node:21-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

ENV MONGODB_CONN_STRING=${CONN_STR}
ENV PORT=${PORT}
ENV JWT_SECRET=${SECRET}

CMD ["node", "src/server.js"]