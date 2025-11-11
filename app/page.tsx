import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { type ReactNode } from 'react';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 via-white to-zinc-100 px-6 py-16 font-sans text-zinc-900 dark:from-[#050505] dark:via-black dark:to-[#111] dark:text-zinc-100">
      <main className="w-full max-w-4xl rounded-3xl border border-zinc-200 bg-white p-16 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
          Introducing
        </p>
        <h1 className="mt-6 text-5xl font-bold leading-tight text-zinc-900 dark:text-white sm:text-6xl">
          One <span className="text-primary">Workspace</span>. One{' '}
          <span className="text-primary">Solution</span>.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          A unified hub designed to keep your works aligned, organized, and focused.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg">Request early access</Button>
          <Button size="lg" variant="secondary">Book a demo</Button>
        </div>
        <p className="mt-12 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          Already have an account?{' '}
          <Link className="underline font-semibold" href="/login">
            Log in to your workspace
          </Link>
          .
        </p>
      </main>
    </div>
  );
}
