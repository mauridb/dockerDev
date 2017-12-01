# retrieve node image
FROM node:7

# create a folder for my application
WORKDIR /usr/src/app

# copy local dependency to docker image
COPY package.json package.json

# here we are able to run dependencies
RUN npm install

COPY server.js server.js

# expose docker port
EXPOSE 80

# run server
ENTRYPOINT ["npm", "start"]
