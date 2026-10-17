# Signalroom

Business Performance & Revenue Analytics Dashboard for SecureRegent. It is a static Vite/React application using deterministic local dummy data; no backend, secrets, or environment variables are required.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is `dist/`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, select **Add New → Project**, then import that repository.
3. Keep the detected settings: Framework **Vite**, Build Command `npm run build`, Output Directory `dist`.
4. Click **Deploy**. No environment variables are needed.

The application uses in-page view state instead of URL-based routing, so no SPA rewrite configuration is required.
