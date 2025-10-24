import React, { useState } from "react";

// Tailwind utility classes are assumed to be available.
// Export a single component that renders the full page.
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full bg-neutral-100 p-4 md:p-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white shadow-xl overflow-hidden ring-1 ring-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Login Card */}
          <div className="relative bg-white px-8 sm:px-12 md:px-14 py-10 md:py-14">
            <div className="mx-auto w-full max-w-md">
              <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900">Login</h1>
              <p className="mt-2 text-sm text-neutral-500">Enter your account details</p>

              <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Username */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700">Username</label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-[15px] shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700">Password</label>
                  <div className="mt-2 relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-[15px] shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200 pr-10"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-500 hover:text-neutral-800"
                    >
                      {showPassword ? (
                        // Eye-off icon
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                          <path d="M3 3l18 18" />
                          <path d="M10.58 10.58a2 2 0 102.83 2.83" />
                          <path d="M9.88 5.09A9.77 9.77 0 0112 5c5.52 0 10 5.5 10 7- .02.45-1.86 2.56-4.69 4.29" />
                          <path d="M6.61 6.61C4.02 8.2 2.02 10.58 2 12c0 1.5 4.48 7 10 7 1.64 0 3.18-.33 4.56-.92" />
                        </svg>
                      ) : (
                        // Eye icon
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
                  <a href="#" className="text-sm font-medium text-neutral-500 hover:text-neutral-800">Forgot Password?</a>
                </div>

                {/* Login button */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.99]"
                >
                  Login
                </button>

                {/* Divider */}
                <div className="pt-2" />

                {/* Sign up */}
                <div className="flex items-center gap-3 text-sm text-neutral-600">
                  <span>Don't have an account?</span>
                  <a
                    href="#"
                    className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 font-medium text-blue-700 hover:bg-blue-100"
                  >
                    Sign up
                  </a>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Welcome panel */}
          <div className="relative bg-blue-600 text-white p-10 sm:p-12 md:p-14 flex items-center">
            <div className="mx-auto w-full max-w-xl">
              <h2 className="text-5xl sm:text-6xl font-extrabold leading-none">Welcome to</h2>
              <p className="mt-2 text-4xl sm:text-5xl font-extrabold">Income Tax AI</p>
              <p className="mt-3 text-sm/6 text-blue-100">Login to access your account</p>

              {/* Illustration */}
              <div className="mt-10">
                <Illustration />
              </div>
            </div>

            {/* Large rounded corner like in the mock */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -inset-4 rounded-[2rem] ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Illustration() {
  // A clean, lightweight monochrome SVG that roughly matches the feel of the mock.
  return (
    <svg
      viewBox="0 0 760 360"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto drop-shadow-sm"
    >
      <defs>
        <style>{`.s{stroke:#ffffff;stroke-width:3;fill:none;stroke-linecap:round;stroke-linejoin:round}`}</style>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="390" cy="325" rx="230" ry="12" fill="#1d4ed8" opacity="0.35"/>

      {/* Document */}
      <rect x="270" y="120" width="250" height="170" rx="16" className="s" fill="none" />
      <rect x="290" y="140" width="80" height="10" rx="5" className="s" />
      <rect x="290" y="165" width="160" height="10" rx="5" className="s" />
      <rect x="290" y="190" width="120" height="10" rx="5" className="s" />
      <rect x="290" y="215" width="140" height="10" rx="5" className="s" />
      <circle cx="540" cy="205" r="34" className="s" />

      {/* Character 1 - standing */}
      <path d="M190 280c30 0 60 0 90 0" className="s" opacity=".3" />
      <path d="M210 145c25 0 35 22 35 40s-10 40-35 40-35-22-35-40 10-40 35-40z" className="s" />
      <path d="M196 220c5 18 8 37 6 55h24c-1-18 1-37 6-55" className="s" />
      <path d="M178 240l-18 28M230 240l18 28" className="s" />
      <path d="M190 155l28 28M190 155l-28 24" className="s" />

      {/* Character 2 - sitting on document with laptop */}
      <path d="M470 120c18-10 40 0 45 18l10 35h-32l-23-53z" className="s" />
      <path d="M505 170l40 0 14 12-62 0z" className="s" />
      <rect x="520" y="150" width="48" height="28" rx="4" className="s" />

      {/* Plant */}
      <path d="M560 220c20 20 28 45 14 60-18 18-68 12-82-2-12-12 2-30 12-42 10-12 24-20 56-16z" className="s" />
    </svg>
  );
}
