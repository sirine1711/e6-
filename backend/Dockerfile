# Le multi-stage build permet de séparer la phase de test et la phase de production.
# Cela réduit la taille de l’image finale et évite d’embarquer les dépendances de développement,
# ce qui améliore aussi la sécurité.

FROM node:20-alpine AS test
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm test

FROM node:20-alpine AS production
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY server.js ./

EXPOSE 3000

CMD ["npm", "start"]