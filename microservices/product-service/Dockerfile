# Multi-stage build
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# ========================
# Final stage
FROM node:18-alpine

WORKDIR /app

# Create logs directory
RUN mkdir -p /app/logs

# Copy from builder
COPY --from=builder /app/node_modules ./node_modules

# Copy application code
COPY app.js .
COPY config/ ./config/
COPY routes/ ./routes/
COPY models/ ./models/
COPY .env.example .env

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3001/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Expose port
EXPOSE 3001

# Run as non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app

USER nodejs

# Start application
CMD ["node", "app.js"]
