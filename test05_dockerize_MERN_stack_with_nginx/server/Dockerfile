# Dockerfile for Node Express backend

FROM node:16-alpine

WORKDIR /app

# Install dependencies
COPY package.json .

RUN npm install

# Copy app source code
COPY . .

CMD ["npm", "start"]