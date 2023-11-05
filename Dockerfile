# Use the official Bun image
FROM node:18

# Install Bun
RUN npm install -g bun

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
COPY bun.lockb ./
RUN bun install

# Bundle app source
COPY . .

# Compile TypeScript and generate Prisma client
RUN bun x prisma generate
RUN bun build ./src/app.ts --outfile=app.js

# Expose the port the API listens on
EXPOSE 3000

# Start the API with Bun
CMD ["bun", "run", "app.js"]
