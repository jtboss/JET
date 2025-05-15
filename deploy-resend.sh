#!/bin/bash

# Set environment variables for deployment
export RESEND_API_KEY="re_7ySnymjj_43xzDuSLXQmkjyUYKqYMSK2Y"
export ADMIN_EMAIL="hey.jjedwards@gmail.com"

# Create temporary .env file for build
echo "RESEND_API_KEY=$RESEND_API_KEY" > .env.local
echo "ADMIN_EMAIL=$ADMIN_EMAIL" >> .env.local

# Install dependencies
npm install

# Test the build locally first
echo "Testing build locally..."
npm run build

# If build succeeded, deploy to Vercel
if [ $? -eq 0 ]; then
  echo "Build successful, deploying to Vercel..."
  
  # Deploy to Vercel with permanent environment variables
  vercel deploy --prod --yes \
    --build-env RESEND_API_KEY="$RESEND_API_KEY" \
    --env RESEND_API_KEY="$RESEND_API_KEY" \
    --build-env ADMIN_EMAIL="$ADMIN_EMAIL" \
    --env ADMIN_EMAIL="$ADMIN_EMAIL"
    
  # Update project environment variables permanently
  vercel env add RESEND_API_KEY production "$RESEND_API_KEY" --yes
  vercel env add ADMIN_EMAIL production "$ADMIN_EMAIL" --yes
else
  echo "Build failed. Please fix the issues before deploying."
  exit 1
fi

# Clean up
rm .env.local 