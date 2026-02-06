# FROM node:18-alpine
# ADD . /app
# USER node
# WORKDIR /app
# RUN apk add --update-cache sqlite
# CMD npm install

FROM node:18-alpine
WORKDIR /app
# copia só o necessário pra instalar deps
COPY package*.json ./
RUN npm install
# agora copia o resto
COPY . .
CMD ["npm", "run", "dev"]
