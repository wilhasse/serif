import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import { LogoutButton } from '@/components/logout-button'

export default async function Home() {
  const supabase = await createClient()
  const { data } = await supabase.auth.getClaims()
  const user = data?.claims

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-2xl space-y-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to Serif</h1>
        <p className="text-lg text-muted-foreground">
          A secure Next.js application with Supabase authentication
        </p>
        
        <div className="flex justify-center gap-4">
          {user ? (
            <>
              <p className="flex items-center gap-2">
                Welcome, <span className="font-semibold">{user.email}</span>
              </p>
              <Link href="/protected">
                <Button>Go to Dashboard</Button>
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button>Login</Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button variant="outline">Sign Up</Button>
              </Link>
            </>
          )}
        </div>

        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold">Features</h2>
          <ul className="space-y-2 text-left mx-auto max-w-md">
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Secure authentication with Supabase</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Protected routes with middleware</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Email verification and password recovery</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Modern UI with Tailwind CSS</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>TypeScript for type safety</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}