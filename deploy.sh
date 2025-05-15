#!/bin/bash

# Install dependencies if needed
npm install

# Build the project
npm run build

# Deploy to Vercel with environment variables
vercel deploy --prod --yes --env re_7ySnymjj_43xzDuSLXQmkjyUYKqYMSK2Y="$RESEND_API_KEY" --env ADMIN_EMAIL="hey.jjedwards@gmail.com" 