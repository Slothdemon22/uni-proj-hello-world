'use client';

import { InputGroup } from '@/components/ui/inputs';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/inputs/textarea';
import { z } from 'zod';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const contactSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(80),
  lastName: z.string().trim().min(1, 'Last name is required').max(80),
  email: z.string().trim().email('Enter a valid email').max(254),
  message: z.string().trim().min(10, 'Message is too short').max(4000),
});

type ContactInputs = z.infer<typeof contactSchema>;

export default function ContactClient() {
  const form = useForm<ContactInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: { firstName: '', lastName: '', email: '', message: '' },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values: ContactInputs) {
    setIsSubmitting(true);
    try {
      await toast.promise(
        (async () => {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
          });

          if (!res.ok) {
            const data = (await res.json().catch(() => null)) as
              | { error?: string }
              | null;
            throw new Error(data?.error || 'Failed to send message.');
          }
        })(),
        {
          loading: 'Sending message…',
          success: 'Message sent',
          error: (e) =>
            e instanceof Error ? e.message : 'Could not send. Please try again.',
        }
      );
      form.reset();
    } catch {
      // toast.promise already handled user feedback
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-28">
      <div className="wrapper">
        <div className="relative mx-auto max-w-[980px]">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary-500/10 via-transparent to-[#4E6EFF]/10 blur-2xl" />

          <div className="contact-wrapper border relative z-30 bg-white border-gray-100 dark:bg-dark-primary dark:border-gray-800 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2 p-8 sm:p-10 bg-gray-50/60 dark:bg-white/3 border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-gray-800">
                <h3 className="text-gray-900 dark:text-white font-bold text-3xl mb-3">
                  Let’s talk
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Share your facility, constraints, and what “success” looks like. We’ll reply from{' '}
                  <a
                    className="underline underline-offset-4 hover:text-gray-800 dark:hover:text-gray-200"
                    href="mailto:info@nexvect.com"
                  >
                    info@nexvect.com
                  </a>
                  .
                </p>

                <div className="mt-8 space-y-4">
                  <div>
                    <span className="block text-xs font-semibold tracking-widest text-gray-500 dark:text-gray-500 uppercase">
                      Typical use cases
                    </span>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>PPE &amp; safety compliance detection</li>
                      <li>SOP verification &amp; audit trails</li>
                      <li>Anomaly detection &amp; incident alerts</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 p-8 sm:p-10">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Controller
                      control={form.control}
                      name="firstName"
                      render={({ field, fieldState }) => (
                        <InputGroup
                          label="First name"
                          placeholder="Your first name"
                          disabled={isSubmitting}
                          {...field}
                          error={fieldState.error?.message}
                        />
                      )}
                    />

                    <Controller
                      control={form.control}
                      name="lastName"
                      render={({ field, fieldState }) => (
                        <InputGroup
                          label="Last name"
                          placeholder="Your last name"
                          disabled={isSubmitting}
                          {...field}
                          error={fieldState.error?.message}
                        />
                      )}
                    />

                    <Controller
                      control={form.control}
                      name="email"
                      render={({ field, fieldState }) => (
                        <InputGroup
                          type="email"
                          label="Work email"
                          placeholder="name@company.com"
                          groupClassName="sm:col-span-2"
                          disabled={isSubmitting}
                          {...field}
                          error={fieldState.error?.message}
                        />
                      )}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={7}
                      placeholder="Example: We want PPE detection and SOP compliance on Line 2. We have 12 cameras and PLC data."
                      disabled={isSubmitting}
                      {...form.register('message')}
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1.5">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      By sending, you agree we may reply to your email.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary-500 hover:bg-primary-600 disabled:opacity-60 disabled:cursor-not-allowed transition h-12 py-3 px-8 font-semibold text-white text-sm rounded-full"
                    >
                      {isSubmitting ? 'Sending…' : 'Send message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="absolute -bottom-32 left-1/2 -translate-x-1/2 z-0">
        <svg
          width="930"
          height="760"
          viewBox="0 0 930 760"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3" filter="url(#filter0_f_9248_10254)">
            <circle cx="380.335" cy="380.335" r="179.665" fill="#FF58D5" />
          </g>
          <g opacity="0.7" filter="url(#filter1_f_9248_10254)">
            <circle cx="549.665" cy="380.335" r="179.665" fill="#4E6EFF" />
          </g>
          <defs>
            <filter
              id="filter0_f_9248_10254"
              x="0.669922"
              y="0.6698"
              width="759.33"
              height="759.33"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_9248_10254"
              />
            </filter>
            <filter
              id="filter1_f_9248_10254"
              x="170"
              y="0.6698"
              width="759.33"
              height="759.33"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_9248_10254"
              />
            </filter>
          </defs>
        </svg>
      </span>
    </section>
  );
}

