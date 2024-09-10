FROM node:20-alpine AS development

WORKDIR /backend

COPY package*.json ./

RUN npm install --only=developement

COPY . .

CMD ["npm", "run", "start:dev"]

FROM node:19-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /backend

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

CMD ["node", "dist/main"]



