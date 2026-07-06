# Build stage
FROM node:24.11.1-alpine3.23 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --production=false

COPY . .
RUN npm run build

# Run stage
FROM node:24.11.1-alpine3.23
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app ./

EXPOSE 3001
CMD ["npm", "start", "--", "--port", "3001"]