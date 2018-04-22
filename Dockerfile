FROM node:9.11

ENV REDIS_URL="redis://heechan.local"
WORKDIR app
COPY ./package.json package.json
COPY ./yarn.lock yarn.lock
RUN yarn install
COPY ./index.js index.js
EXPOSE 8080
ENTRYPOINT ["node"]
CMD ["index.js"]