# # Dockerfile for React Frontend
# FROM node:16-alpine

# WORKDIR /usr/src/app/client

# # Install dependencies
# COPY ./package*.json ./
# RUN npm install

# # Copy app source code
# COPY ./ ./

# EXPOSE 3000

# CMD ["npm", "start"]

FROM node:16-alpine

WORKDIR /usr/src/app/client

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]