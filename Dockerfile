# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .

# Expose Vite build-time env vars (set via --build-arg)
ARG VITE_PUBLIC_SUPABASE_URL
ARG VITE_PUBLIC_SUPABASE_ANON_KEY
ENV VITE_PUBLIC_SUPABASE_URL=${VITE_PUBLIC_SUPABASE_URL}
ENV VITE_PUBLIC_SUPABASE_ANON_KEY=${VITE_PUBLIC_SUPABASE_ANON_KEY}

RUN npm run build

# Runtime stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=4173

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 4173
CMD ["npm", "run", "start"]
