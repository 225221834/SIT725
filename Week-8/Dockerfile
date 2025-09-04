# Base image
FROM node:current-alpine
# Set working directory
WORKDIR /app
# Copy package.json and install dependencies
COPY package*.json ./
# Install dependencies and fix vulnerabilities
RUN npm install
# Copy the rest of the app
COPY . .
# Expose port and start server
EXPOSE 3000
CMD ["node", "server.js"]  