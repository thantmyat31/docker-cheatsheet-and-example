# # Dockerfile for Node Express backend
# FROM node:16-alpine

# WORKDIR /usr/src/app/server

# # Install dependencies
# COPY ./package*.json ./
# RUN npm install

# # Copy app source code
# COPY ./ ./

# EXPOSE 8000

# CMD ["npm", "run", "server"]


FROM node:16-alpine

RUN npm install -g nodemon

WORKDIR /usr/src/app/server

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "server"]