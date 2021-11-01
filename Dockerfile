FROM node:16-alpine3.14

COPY ./web /app
WORKDIR /app

RUN yarn && yarn build
CMD yarn start

EXPOSE 3000