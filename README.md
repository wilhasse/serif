# Serif - Next.js + Supabase Authentication Starter

A modern, secure Next.js application with complete Supabase authentication integration, featuring login, signup, password recovery, and protected routes.

## Features

- 🔐 **Complete Authentication System** - Login, signup, password recovery, email verification
- 🛡️ **Protected Routes** - Automatic middleware-based route protection
- 🎨 **Modern UI Components** - Built with Tailwind CSS and Radix UI
- ⚡ **Next.js 15** - Latest features with App Router and Server Components
- 🔒 **Secure by Default** - Supabase Row Level Security (RLS) ready
- 📱 **Responsive Design** - Works seamlessly on all devices

## Tech Stack

- **Framework:** Next.js 15.4.6
- **Authentication:** Supabase Auth
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Package Manager:** pnpm
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)
- Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone https://github.com/wilhasse/serif.git
cd serif
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Edit `.env.local` with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY=your_supabase_anon_key
```

5. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## Project Structure

```
serif/
├── app/
│   ├── auth/           # Authentication pages
│   │   ├── login/      # Login page
│   │   ├── sign-up/    # Registration page
│   │   ├── forgot-password/  # Password recovery
│   │   └── confirm/    # Email confirmation handler
│   ├── protected/      # Protected route example
│   └── page.tsx        # Home page
├── components/
│   ├── ui/            # Reusable UI components
│   └── *.tsx          # Auth form components
├── lib/
│   └── supabase/      # Supabase client configuration
│       ├── client.ts  # Browser client
│       ├── server.ts  # Server client
│       └── middleware.ts  # Auth middleware
└── middleware.ts      # Next.js middleware for route protection
```

## Deployment on Vercel

### Step 1: Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Step 2: Configure Environment Variables

After deployment, you'll get a 500 error. This is because Vercel needs your Supabase environment variables:

1. In Vercel Dashboard, go to your project
2. Click on **Settings** → **Environment Variables**
3. Add these variables:

#### NEXT_PUBLIC_SUPABASE_URL
```
your_supabase_project_url
```

#### NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY
```
your_supabase_anon_key
```

4. Select all environments (Production, Preview, Development)
5. Click "Save"

### Step 3: Redeploy

After adding environment variables:
1. Go to the **Deployments** tab
2. Click the three dots menu on your latest deployment
3. Select **Redeploy**
4. Wait for deployment to complete

Your application should now be live! 🎉

## Supabase Setup

### Database Schema

If you need to set up your Supabase database:

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Create a new project or use existing one
3. Go to **Settings** → **API**
4. Copy your project URL and anon/public key
5. Add them to your environment variables

### Email Templates (Optional)

To customize authentication emails:
1. Go to **Authentication** → **Email Templates**
2. Customize the templates for:
   - Confirmation Email
   - Password Recovery
   - Magic Link

### Authentication Settings

1. Go to **Authentication** → **Providers**
2. Ensure Email provider is enabled
3. Configure any additional providers (Google, GitHub, etc.) if needed

## Available Scripts

```bash
# Development
pnpm dev          # Start development server

# Production
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
```

## Protected Routes

The application automatically protects routes based on authentication status:

- **Protected Routes:** `/protected`, `/dashboard`, `/profile`, `/settings`
- **Public Routes:** `/`, `/auth/*`

To add more protected routes, edit the `protectedRoutes` array in `/lib/supabase/middleware.ts`.

## Customization

### Adding New Protected Pages

1. Create your page in the `app` directory
2. Add the route to `protectedRoutes` in `/lib/supabase/middleware.ts`
3. The middleware will automatically handle authentication

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Using Tailwind utility classes

## Troubleshooting

### Common Issues

**500 Error on Vercel:**
- Make sure environment variables are added in Vercel Dashboard
- Redeploy after adding environment variables

**Authentication not working:**
- Check Supabase project is active
- Verify environment variables are correct
- Check browser console for errors

**Build errors:**
- Ensure Node.js version is 18+
- Clear `.next` folder and rebuild
- Check for TypeScript errors with `pnpm build`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

Built with ❤️ using Next.js and Supabase