# Dockerfile for React Frontend

FROM node:16-alpine as builder

# Create app directory
WORKDIR /app

# Install dependencies
COPY package.json .

RUN npm install

# Copy app source code
COPY . .

RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 3000
# Start nginx
CMD ["nginx", "-g", "daemon off;"]