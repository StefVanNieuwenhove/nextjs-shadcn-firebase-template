# Nextjs - Shadcn - Firebase Template

Template for Nextjs, Shadcn, Firebase

## Getting Started

1. Clone the repo
2. Install dependencies
3. Create a firebase project
4. Create a firebase app
5. Create a firebase firestore
6. Create a `.env` file in the root of the project
7. Add the following variables to the `.env` file, find the values in the firebase console > project settings > general > your apps

```
NEXT_PUBLIC_API_KEY=''
NEXT_PUBLIC_AUTH_DOMAIN=''
NEXT_PUBLIC_PROJECT_ID=''
NEXT_PUBLIC_STORAGE_BUCKET=''
NEXT_PUBLIC_MESSAGE_SENDER_ID=''
NEXT_PUBLIC_APP_ID=''
```

8.  Change the Firestore rules to allow read and write access to all users

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

9.  Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
