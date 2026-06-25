# Toriino Website

A Next.js + Tailwind website for Toriino.

## Brand

- Slogan: Enter Extraordinary.
- Primary color: Vermillion Red `#E34234`
- Positioning: The gateway where knowledge, mentorship, and opportunity meet.

## Pages included

- `/` Home
- `/start-learning` Student waitlist
- `/become-a-teacher` Teacher application
- `/become-a-mentor` Mentor application
- `/about`
- `/contact`
- `/privacy`
- `/terms`

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Forms

Forms currently show a success message. To connect submissions, set:

```bash
NEXT_PUBLIC_WAITLIST_FORM_ENDPOINT=https://your-form-endpoint.com
```

The form sends JSON with the role and all fields.

## Deployment

Recommended: deploy to Vercel first for speed. Developers can also deploy to AWS.

Suggested structure:

- `toriino.com` = public marketing website
- `app.toriino.com` = future web application / login portal

## Legal note

The Privacy Policy and Terms of Service pages are placeholders. They should be reviewed by legal counsel before full public launch or app store submission.
