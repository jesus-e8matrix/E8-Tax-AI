'use client';

import { useState } from 'react';
import AppShell from '../components/layout/AppShell';

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="block text-sm font-semibold text-neutral-800 mb-1">{children}</label>;
}

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className = '', ...rest } = props;
  return (
    <input
      {...rest}
      className={
        'w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ' +
        'placeholder:text-neutral-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 ' +
        className
      }
    />
  );
}

function Select({
  children,
  ...rest
}: React.SelectHTMLAttributes<HTMLSelectElement> & { children: React.ReactNode }) {
  return (
    <div className="relative">
      <select
        {...rest}
        className={
          'w-full appearance-none rounded-xl border border-neutral-300 bg-white px-3 py-2 pr-9 text-sm outline-none ' +
          'focus:border-blue-500 focus:ring-4 focus:ring-blue-200'
        }
      >
        {children}
      </select>
      {/* chevron */}
      <svg
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}

export default function ProfilePage() {
  const [form, setForm] = useState({
    firstName: 'Mehrab',
    lastName: 'Bozorgi',
    email: 'Mehrabbozorgi.business@gmail.com',
    address: '33062 Zboncak isle',
    phone: '58077.79',
    city: 'Mehrab',
    state: 'Bozorgi',
    password: 'sbdfbnd65sfdvb s',
  });

  const onChange =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <AppShell>
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black">My Profile</h1>
        <div className="mt-2 h-0.5 w-40 rounded bg-gradient-to-r from-lime-400 to-blue-500" />
      </div>

      <p className="text-sm text-neutral-600 mb-6">
        Manage your personal details and contact information.
      </p>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[280px_minmax(0,1fr)]">
        {/* Left: avatar + action */}
        <div className="flex flex-col items-start gap-4">
          <div className="h-48 w-48 overflow-hidden rounded-full ring-1 ring-black/10">
            <img
              src="/header/avatar.jpg" // replace if you have another profile image path
              alt="Profile photo"
              className="h-full w-full object-cover"
              width={192}
              height={192}
            />
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
          >
            {/* edit icon */}
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
            </svg>
            Edit Profile
          </button>
        </div>

        {/* Right: form */}
        <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* First / Last */}
          <div>
            <FieldLabel>First Name</FieldLabel>
            <TextInput value={form.firstName} onChange={onChange('firstName')} />
          </div>
          <div>
            <FieldLabel>Last Name</FieldLabel>
            <TextInput value={form.lastName} onChange={onChange('lastName')} />
          </div>

          {/* Email with success check */}
          <div className="md:col-span-2">
            <FieldLabel>Email</FieldLabel>
            <div className="relative">
              <TextInput type="email" value={form.email} onChange={onChange('email')} className="pr-10" />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <FieldLabel>Address</FieldLabel>
            <TextInput value={form.address} onChange={onChange('address')} />
          </div>

          {/* Phone */}
          <div className="md:col-span-2">
            <FieldLabel>Contact Number</FieldLabel>
            <TextInput value={form.phone} onChange={onChange('phone')} />
          </div>

          {/* City / State */}
          <div>
            <FieldLabel>City</FieldLabel>
            <Select value={form.city} onChange={onChange('city')}>
              <option value="Mehrab">Mehrab</option>
              <option value="Caracas">Caracas</option>
              <option value="NYC">New York</option>
            </Select>
          </div>
          <div>
            <FieldLabel>State</FieldLabel>
            <Select value={form.state} onChange={onChange('state')}>
              <option value="Bozorgi">Bozorgi</option>
              <option value="FL">Florida</option>
              <option value="CA">California</option>
            </Select>
          </div>

          {/* Password with success check */}
          <div className="md:col-span-2">
            <FieldLabel>Password</FieldLabel>
            <div className="relative">
              <TextInput type="password" value={form.password} onChange={onChange('password')} className="pr-10" />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
          </div>

          {/* Save button (non-functional placeholder) */}
          <div className="md:col-span-2">
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>

      <div className="py-10" />
    </AppShell>
  );
}
