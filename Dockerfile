FROM node:21-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

ARG CONN_STR
ARG PRT
ARG TOK_SCR

ENV MONGODB_CONN_STRING=${CONN_STR}
ENV PORT=${PRT}
ENV JWT_SECRET=${TOK_SCR}

CMD ["node", "src/server.js"]