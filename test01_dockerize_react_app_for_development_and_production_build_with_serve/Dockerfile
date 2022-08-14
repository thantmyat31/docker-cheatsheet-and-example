FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD ["npx", "serve", "build"]

# Running docker container without docker-compose

# Build the our own image
# $ docker build -t [image-name] .

# Run the docker container
# $ docker run --name [container-name] -p 3000:3000 --rm [image-name]