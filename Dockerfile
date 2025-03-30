# Stage 1: Install dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN apk add --no-cache libc6-compat && npm install --verbose

# Stage 2: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build && \
    find /app/.next -name "*.map" -delete && \
    find /app/node_modules -name "*.md" -delete && \
    find /app/node_modules -name "*.ts" -delete && \
    find /app/node_modules -name "*.map" -delete && \
    find /app/node_modules -name "test" -type d -exec rm -rf {} + && \
    find /app/node_modules -name "tests" -type d -exec rm -rf {} +

# Stage 3: Production
FROM gcr.io/distroless/nodejs18-debian11 AS production
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/node_modules ./node_modules
CMD ["node_modules/.bin/next", "start"]
EXPOSE 3000