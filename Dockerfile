# Use Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of the source code
COPY . .

# Expose Vite's default port (5173)
EXPOSE 5173

# Start Vite dev server
CMD ["npm", "run", "dev"]
