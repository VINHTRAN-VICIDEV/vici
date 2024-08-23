FROM node:20-alpine AS development

WORKDIR /backend

COPY package.json yarn.lock ./

RUN yarn --only=developement

COPY . .

CMD ["yarn", "start:dev"]

FROM node:19-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /backend

COPY package*.json ./

RUN yarn --only=production

COPY . .

RUN npm run build

CMD ["node", "dist/main"]



