'use client';

import Image from "next/image";
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState } from 'react';

export default function Home() {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });
  const [input, setInput] = useState('');

  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] justify-items-center min-h-screen max-h-screen overflow-hidden p-4 gap-4">
      {/* Header */}
      <header className="flex flex-col items-center gap-2 text-center py-4">
        <Image
          src="/logo.png"
          alt="BuildKit logo"
          width={50}
          height={38}
          priority
          className="mb-5"
        />
        <h1 className="text-3xl font-bold">Vercel AI SDK Starter</h1>
        <p className="text-sm text-foreground/[.60] max-w-md">
          Build AI-powered applications with streaming responses using the Vercel AI SDK
        </p>
      </header>

      <main className="flex flex-col gap-6 items-center w-full overflow-auto min-h-0 py-4">
        {/* AI Chat Component */}
        <div className="w-full max-w-4xl border border-solid border-black/[.08] dark:border-white/[.145] rounded-lg p-8 bg-background hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors shadow-sm flex flex-col max-h-[50vh]">
          <h3 className="text-lg font-semibold mb-4 text-center text-foreground">
            Chat with an AI Assistant
          </h3>

          <div className="space-y-2 mb-4 flex-1 overflow-y-auto min-h-0">
            {messages.map(message => (
              <div key={message.id} className={`p-3 rounded-lg ${message.role === 'user'
                ? 'bg-foreground/[.05] border border-foreground/[.08]'
                : 'bg-foreground/[.02] border border-foreground/[.05]'
                }`}>
                <strong className="text-foreground/[.87]">
                  {message.role === 'user' ? 'You: ' : 'AI: '}
                </strong>
                <span className="text-foreground/[.70]">
                  {message.parts.map((part, index) =>
                    part.type === 'text' ? <span key={index}>{part.text}</span> : null,
                  )}
                </span>
              </div>
            ))}
          </div>

          <form
            onSubmit={e => {
              e.preventDefault();
              if (input.trim()) {
                sendMessage({ text: input });
                setInput('');
              }
            }}
            className="flex gap-2"
          >
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={status !== 'ready'}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 border border-black/[.08] dark:border-white/[.145] rounded-md text-sm bg-background text-foreground placeholder:text-foreground/[.60] disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-foreground/[.20]"
            />
            <button
              type="submit"
              disabled={status !== 'ready'}
              className="px-4 py-2 bg-foreground text-background hover:bg-foreground/[.85] disabled:bg-foreground/[.50] disabled:text-background/[.60] rounded-md text-sm font-medium transition-colors"
            >
              Send
            </button>
          </form>
        </div>

        <ol className="font-mono list-inside list-decimal text-sm/6 text-center">
          <li className="mb-2 tracking-[-.01em]">
            Set your{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              OPENAI_API_KEY
            </code>{" "}
            environment variable.
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Configure your agent in{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/api/chat/route.ts
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center py-4 px-4">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://buildkit.picaos.com/integrations"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://buildkit.picaos.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to BuildKit →
        </a>
      </footer>
    </div>
  );
}
