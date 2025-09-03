# Vercel AI SDK Starter

A modern Next.js application powered by the [Vercel AI SDK](https://sdk.vercel.ai/) with a beautiful chat interface featuring streaming responses. Built with React, TypeScript, and Tailwind CSS.

## Prerequisites

Before running this project, you'll need:

1. An OpenAI API key - Get one from [OpenAI Platform](https://platform.openai.com/api-keys)
2. Node.js 18+ installed on your machine

## Getting Started

1. **Clone and install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Set up your environment variables:**

Create a `.env.local` file in the root directory:

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

3. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000) to see the chat interface.

## Project Structure

- `src/app/page.tsx` - Main chat interface using `@ai-sdk/react`
- `src/app/api/chat/route.ts` - API route handling streaming chat responses
- `src/app/layout.tsx` - Root layout with metadata and fonts

## Customization

### Modify the AI Agent

Edit `src/app/api/chat/route.ts` to customize the AI's behavior:

```typescript
const result = streamText({
    model: openai('gpt-4.1'), // Change model
    system: 'You are a helpful assistant.', // Modify system prompt
    messages: convertToModelMessages(messages),
});
```

### Styling

This project uses Tailwind CSS. Modify styles in `src/app/globals.css` or component files.

## Learn More

- [Vercel AI SDK Documentation](https://sdk.vercel.ai/) - Learn about the AI SDK features and API
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [OpenAI API Documentation](https://platform.openai.com/docs) - Learn about OpenAI's API
- [BuildKit Documentation](https://buildkit.picaos.com/integrations) - Learn about BuildKit

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
