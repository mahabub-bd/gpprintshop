# Base stage - minimal Alpine with Node.js only
FROM node:22-alpine AS base

WORKDIR /app

# Build stage with tools for compiling native modules
FROM base AS build-tools

# Install build tools only for this stage
RUN apk add --no-cache libc6-compat python3 make g++ \
    && rm -rf /var/cache/apk/*

FROM build-tools AS dependencies

# Install pnpm
RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

# Install all dependencies (including dev) for build
RUN pnpm install

FROM dependencies AS build

COPY . ./

# Build the application
RUN pnpm run build

# Production stage - start from clean base (no build tools)
FROM node:22-alpine AS production

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

WORKDIR /app

# Copy standalone output - this already includes only necessary production dependencies
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Change ownership to nextjs user
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
