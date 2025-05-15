#!/bin/bash

# Set the Resend API key (replace with your actual key)
RESEND_API_KEY=${1:-"your_resend_api_key_here"}
ADMIN_EMAIL="hey.jjedwards@gmail.com"

# Create a temporary .env.production file
echo "RESEND_API_KEY=$RESEND_API_KEY" > .env.production
echo "ADMIN_EMAIL=$ADMIN_EMAIL" >> .env.production

# Install dependencies if needed
npm install

# Build the project
npm run build

# Deploy to Vercel with environment variables
vercel deploy --prod --yes \
  --build-env RESEND_API_KEY="$RESEND_API_KEY" \
  --env RESEND_API_KEY="$RESEND_API_KEY" \
  --build-env ADMIN_EMAIL="$ADMIN_EMAIL" \
  --env ADMIN_EMAIL="$ADMIN_EMAIL"

# Clean up
rm .env.production 