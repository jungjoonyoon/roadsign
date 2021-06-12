FROM node:14
WORKDIR /work
COPY ./package*.json ./
RUN mkdir node_modules && npm install
RUN npm install --global gatsby-cli && gatsby telemetry --disable && mkdir /save 
COPY ./entrypoint.sh /work
