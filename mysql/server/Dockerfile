FROM node:alpine
RUN npm install -g nodemon
WORKDIR /app/server
COPY package*.json ./
# COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "dev"]