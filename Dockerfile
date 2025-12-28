# Stage 1: Base image
FROM node:20-alpine AS base

# Stage 2: Install dependencies
FROM base AS deps
WORKDIR /app
# Update npm et set timeouts plus longs pour éviter ETIMEDOUT
RUN npm install -g npm@latest && \
    npm config set fetch-timeout 600000 && \
    npm config set fetch-retry-maxtimeout 600000
COPY package.json package-lock.json ./
RUN npm ci

# Stage 3: Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Génère le client Prisma pendant le build
RUN npx prisma generate
# Build l'application Next.js
RUN npm run build

# Stage 4: Production runner (image lightweight)
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
# Copie seulement ce qui est nécessaire
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma
# Expose le port
EXPOSE 3000
# Optionnel : Si tu as des migrations Prisma, ajoute "npx prisma migrate deploy &&" avant npm start
CMD ["npm", "start"]