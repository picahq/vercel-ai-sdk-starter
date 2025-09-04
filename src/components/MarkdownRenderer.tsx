import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';

interface MarkdownRendererProps {
  children: string;
  className?: string;
}

export function MarkdownRenderer({ children, className = '' }: MarkdownRendererProps) {
  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          // Custom styling for different elements
          h1: ({ children }) => (
            <h1 className="text-2xl font-bold mb-4 text-foreground border-b border-foreground/[.1] pb-2">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-bold mb-3 text-foreground border-b border-foreground/[.08] pb-1">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-base font-semibold mb-2 text-foreground">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-foreground/[.85] leading-relaxed">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="mb-4 pl-6 space-y-1 list-disc text-foreground/[.85]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-4 pl-6 space-y-1 list-decimal text-foreground/[.85]">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-foreground/[.85] leading-relaxed">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-4 bg-foreground/[.02] rounded-r text-foreground/[.8] italic">
              {children}
            </blockquote>
          ),
          code: ({ className, children, ...props }) => {
            const inline = !className;
            if (inline) {
              return (
                <code
                  className="bg-foreground/[.08] text-foreground px-1 py-0.5 rounded font-mono text-sm"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code
                className={`${className || ''} block bg-foreground/[.05] text-foreground p-3 rounded-lg font-mono text-sm overflow-x-auto border border-foreground/[.08]`}
                {...props}
              >
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="mb-4 overflow-x-auto bg-foreground/[.05] rounded-lg border border-foreground/[.08]">
              {children}
            </pre>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-foreground/[.9]">
              {children}
            </em>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          table: ({ children }) => (
            <div className="mb-4 overflow-x-auto">
              <table className="min-w-full border border-foreground/[.1] rounded-lg">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="px-4 py-2 bg-foreground/[.05] border-b border-foreground/[.1] text-left font-semibold text-foreground">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2 border-b border-foreground/[.08] text-foreground/[.85]">
              {children}
            </td>
          ),
          hr: () => (
            <hr className="my-6 border-t border-foreground/[.1]" />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}