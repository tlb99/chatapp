# Use an official Node.js runtime as a parent image
FROM node:22 as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build --prod

# Use an official Nginx runtime as a parent image
FROM nginx:latest

# Copy the Nginx configuration file
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy the build output to the Nginx html directory
COPY --from=build /usr/src/app/dist/frontend/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80
