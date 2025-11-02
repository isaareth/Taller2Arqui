# Use base image
FROM node:18-alpine

# Create work directory
WORKDIR /app

# Copy configuration files (para aprovechar cache)
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy .env.example as .env in the container
COPY .env.example .env

# Copy all code
COPY . .

# Expose port
EXPOSE 3000

# Execute app
CMD ["npm", "start"]