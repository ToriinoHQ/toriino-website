'use client';

import { FormEvent, useMemo, useState } from 'react';

type OptionField = {
  label: string;
  name: string;
  type: 'select';
  options: string[];
  required?: boolean;
};

type TextField = {
  label: string;
  name: string;
  type: 'text' | 'email' | 'textarea';
  placeholder?: string;
  required?: boolean;
};

type Field = OptionField | TextField;

function getFormName(role: string) {
  if (role === 'Student') return 'toriino-student-signup';
  if (role === 'Teacher') return 'toriino-teacher-signup';
  if (role === 'Mentor') return 'toriino-mentor-signup';

  return 'toriino-student-signup';
}

export function SignupForm({
  title,
  description,
  role,
  fields,
}: {
  title: string;
  description: string;
  role: string;
  fields: Field[];
}) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle'
  );

  const formName = getFormName(role);

  const successMessage = useMemo(() => {
    if (role === 'Student') {
      return 'You’re on the list. Welcome to Toriino — the gateway where learning begins.';
    }

    if (role === 'Teacher') {
      return 'Your teacher application has been received. Thank you for helping build the future of learning on Toriino.';
    }

    return 'Your mentor application has been received. Thank you for helping others enter extraordinary through Toriino.';
  }, [role]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.set('form-name', formName);
    formData.set('role', role);

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!response.ok) {
        throw new Error('Netlify form submission failed');
      }

      form.reset();
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }

  return (
    <div className="card p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-warmWhite">{title}</h2>

      <p className="mt-3 text-sm leading-6 text-softGray">{description}</p>

      <form
        name={formName}
        method="POST"
        action="/__forms.html"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="mt-8 grid gap-5"
      >
        <input type="hidden" name="form-name" value={formName} />
        <input type="hidden" name="role" value={role} />

        <p className="hidden">
          <label>
            Don’t fill this out if you’re human:{' '}
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>

        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="label">
              {field.label}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                rows={4}
                className="input-field resize-y"
              />
            ) : field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                className="input-field"
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>

                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                required={field.required}
                type={field.type}
                placeholder={field.placeholder}
                className="input-field"
              />
            )}
          </div>
        ))}

        <button
          disabled={status === 'submitting'}
          type="submit"
          className="mt-2 rounded-full bg-vermillion px-6 py-3 text-sm font-semibold text-warmWhite shadow-redGlow transition hover:-translate-y-0.5 hover:bg-[#f04b3d] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'submitting' ? 'Submitting...' : title}
        </button>

        {status === 'success' && (
          <p className="rounded-xl border border-vermillion/30 bg-vermillion/10 p-4 text-sm text-warmWhite">
            {successMessage}
          </p>
        )}

        {status === 'error' && (
          <p className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-warmWhite">
            Something went wrong. Please try again or contact Toriino at support@toriino.com.
          </p>
        )}
      </form>
    </div>
  );
}