'use client';
import React, { useState } from 'react';

// Default export: Registration page so you can preview it here.
export default function RegistrationPagePreview() {
  const [agree, setAgree] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="h-screen w-screen bg-white">
      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        {/* Left: Registration form */}
        <div className="flex h-full flex-col justify-center bg-white px-8 sm:px-12 md:px-16">
          <div className="mx-auto w-full max-w-md">
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900">Create Your Account</h1>
            <p className="mt-2 text-sm text-neutral-500">Enter your details</p>

            <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Full name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700">Full Name</label>
                <input id="fullName" type="text" autoComplete="name" required placeholder="Alex Bream" className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-[15px] shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200" />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700">E-mail</label>
                <input id="email" type="email" autoComplete="email" required placeholder="name@example.com" className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-[15px] shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200" />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">Phone number</label>
                <input id="phone" type="tel" autoComplete="tel" placeholder="+234 000-000-0000" className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-[15px] shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200" />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-neutral-700">Create password</label>
                <div className="relative mt-2">
                  <input id="password" type={showPwd ? 'text' : 'password'} autoComplete="new-password" required placeholder="••••••••" className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-[15px] shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200" />
                  <button type="button" aria-label={showPwd ? 'Hide password' : 'Show password'} onClick={() => setShowPwd((v) => !v)} className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-500 hover:text-neutral-800">
                    {showPwd ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M3 3l18 18"/><path d="M10 10a2 2 0 103 3"/><path d="M2 12s4-7 10-7 10 7 10 7-2.2 3.9-6 6M6 18c-3.8-2.1-4-6-4-6"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm password */}
              <div>
                <label htmlFor="confirm" className="block text-sm font-medium text-neutral-700">Confirm password</label>
                <div className="relative mt-2">
                  <input id="confirm" type={showConfirm ? 'text' : 'password'} autoComplete="new-password" required placeholder="••••••••" className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-[15px] shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200" />
                  <button type="button" aria-label={showConfirm ? 'Hide password' : 'Show password'} onClick={() => setShowConfirm((v) => !v)} className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-500 hover:text-neutral-800">
                    {showConfirm ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M3 3l18 18"/><path d="M10 10a2 2 0 103 3"/><path d="M2 12s4-7 10-7 10 7 10 7-2.2 3.9-6 6M6 18c-3.8-2.1-4-6-4-6"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="mt-1 flex cursor-pointer select-none items-start gap-3 text-sm text-neutral-700">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-neutral-300 text-blue-600 focus:ring-blue-500" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                <span>
                  I agree to all statements included in <a className="underline underline-offset-2" href="#">Terms of Use</a>
                </span>
              </label>

              <button type="submit" disabled={!agree} className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-60">Sign Up</button>

              <div className="flex items-center justify-between pt-2 text-sm text-neutral-500">
                <span>Already have an account?</span>
                <button className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700" type="button">Login</button>
              </div>
            </form>
          </div>
        </div>

        {/* Right: Welcome panel */}
        <div className="relative flex h-full items-center justify-center bg-blue-600 px-8 sm:px-12 md:px-16 text-white">
          <div className="mx-auto w-full max-w-xl">
            <h2 className="text-5xl font-extrabold leading-none sm:text-6xl">Welcome to</h2>
            <p className="mt-2 text-4xl font-extrabold sm:text-5xl">Income Tax AI</p>
            <p className="mt-3 text-sm/6 text-blue-100">Create your account with ITAI</p>

            <div className="mt-10 flex justify-center">
              <img src="/login-image.png" alt="Registration illustration" className="w-full max-w-lg rounded-2xl shadow-lg ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
