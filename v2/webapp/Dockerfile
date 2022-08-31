# Retrieve base image
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install packages
RUN npm install

# Copy all the files
COPY . .

# Allow connections to 3000
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
