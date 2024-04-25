FROM ubuntu:20.12.2

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY index.js index.js

RUN npm install

ENTRYPOINT ["node", "index.js"]