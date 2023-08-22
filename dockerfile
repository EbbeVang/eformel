FROM node:20-alpine
WORKDIR /react-docker-app
ENV PATH /app/node_modules/.bin:$PATH
COPY public/ /react-docker-app/public
COPY src/ /react-docker-app/src
COPY package.json /react-docker-app/
COPY tsconfig.json /react-docker-app/
COPY express.js /react-docker-app/
RUN npm install
RUN npm run build
CMD [ "node", "express.js" ]