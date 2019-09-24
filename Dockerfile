FROM node:10-alpine

WORKDIR /app

COPY . /app

ENV NODE_ENV=production

RUN npm install \
  && npm install --prefix frontend \
  && npm run build --prefix frontend

EXPOSE 5000

CMD [ "npm", "start" ]