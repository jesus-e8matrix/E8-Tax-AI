'use client';
import React, { useState } from "react";
import Link from 'next/link';


// Tailwind utility classes are assumed to be available.
// Full-viewport login page with an image on the right panel.
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen w-screen bg-white">
      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        {/* Left: Login form (fills full height) */}
        <div className="flex h-full flex-col justify-center bg-white px-8 sm:px-12 md:px-16">
          <div className="mx-auto w-full max-w-md">
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900">Login</h1>
            <p className="mt-2 text-sm text-neutral-500">Enter your account details</p>

            <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Username */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-neutral-700">Username</label>
                <input
                  id="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-[15px] shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
                  placeholder="your@email.com"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-neutral-700">Password</label>
                <div className="relative mt-2">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-[15px] shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-500 hover:text-neutral-800"
                  >
                    {/* Simple eye/eye-off toggle (paths kept minimal) */}
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                        <path d="M3 3l18 18" />
                        <path d="M10 10a2 2 0 103 3" />
                        <path d="M2 12s4-7 10-7 10 7 10 7-2.2 3.9-6 6M6 18c-3.8-2.1-4-6-4-6" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Utility links */}
              <div className="flex items-center justify-between">

                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-neutral-500 hover:text-neutral-800"
                    aria-label="Go to forgot password page"
                  >
                    Forgot Password?
                  </Link>

              </div>

              {/* Login button */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.99]"
              >
                Login
              </button>

              {/* Sign up */}
              <div className="flex items-center gap-3 text-sm text-neutral-600">
                <span>Don't have an account?</span>
                  <Link
                    href="/register"
                    className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 font-medium text-blue-700 hover:bg-blue-100">
                    Sign up
                  </Link>
                  

                
              </div>
            </form>
          </div>
        </div>

        {/* Right: Welcome panel with image */}
        <div className="relative flex h-full items-center justify-center bg-blue-600 px-8 sm:px-12 md:px-16 text-white">
          <div className="mx-auto w-full max-w-xl">
            <h2 className="text-5xl font-extrabold leading-none sm:text-6xl">Welcome to</h2>
            <p className="mt-2 text-4xl font-extrabold sm:text-5xl">Income Tax AI</p>
            <p className="mt-3 text-sm/6 text-blue-100">Login to access your account</p>

            {/* Replaced vector with an image */}
            <div className="mt-10 flex justify-center">
              <img
                src="/login-image.png"
                alt="Login illustration"
                className="w-full max-w-lg rounded-2xl shadow-lg ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
