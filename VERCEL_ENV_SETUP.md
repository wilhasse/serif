# Vercel Environment Variables Setup

## Required Environment Variables

Add these environment variables in your Vercel project settings:

### 1. NEXT_PUBLIC_SUPABASE_URL
```
https://vmbxrumzdjnllpkuxhtw.supabase.co
```

### 2. NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtYnhydW16ZGpubGxwa3V4aHR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3NTc4NTEsImV4cCI6MjA3MDMzMzg1MX0.tR2IGWZB5q310bDjhF5_3PckcMJcZahQ9SAdJFFR_HA
```

## Steps to Add in Vercel Dashboard:

1. Go to https://vercel.com/dashboard
2. Select your `serif` project
3. Click on "Settings" tab
4. Click on "Environment Variables" in the left sidebar
5. Add each variable:
   - Enter the variable name
   - Paste the value
   - Select environments (Production, Preview, Development)
   - Click "Save"
6. After adding both variables, redeploy your project

## To Redeploy:
- Go to the "Deployments" tab
- Click on the three dots menu on your latest deployment
- Select "Redeploy"
- Or push any commit to trigger automatic deployment

## Verification:
After redeployment, your app should work without the 500 error.