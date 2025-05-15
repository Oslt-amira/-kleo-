import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import mermaid from "mermaid";
import "katex/dist/katex.min.css";

// Initialize mermaid
mermaid.initialize({
  startOnLoad: true,
  theme: "default",
  securityLevel: "loose",
});

// Mermaid diagram component
const MermaidDiagram = ({ content }: { content: string }) => {
  useEffect(() => {
    mermaid.contentLoaded();
  }, [content]);

  return (
    <div className="mermaid my-4 rounded-lg bg-white p-4 dark:bg-zinc-800">
      {content}
    </div>
  );
};

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const NonMemoizedMarkdown = ({
  children,
  bgColor = "",
}: {
  children: string;
  bgColor?: string;
}) => {
  const components = {
    code: ({ node, inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || "");
      const code = String(children).replace(/\n$/, "");

      if (!inline && match && match[1] === "mermaid") {
        return <MermaidDiagram content={code} />;
      }

      return !inline && match ? (
        <div
          {...props}
          className="my-2 w-[80dvw] overflow-x-auto rounded-lg text-sm md:max-w-[500px]"
        >
          {code}
        </div>
      ) : (
        <code
          className={`${className} rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-800`}
          {...props}
        >
          {children}
        </code>
      );
    },
    math: ({ value }: { value: string }) => (
      <div className="my-2 overflow-x-auto">
        <span className="katex-display">{value}</span>
      </div>
    ),
    inlineMath: ({ value }: { value: string }) => (
      <span className="katex">{value}</span>
    ),
    ol: ({ node, children, ...props }: any) => {
      return (
        <ol className="ml-4 list-decimal" {...props}>
          {children}
        </ol>
      );
    },
    li: ({ node, children, ...props }: any) => {
      return (
        <li className="py-1 text-sm font-medium" {...props}>
          {children}
        </li>
      );
    },
    ul: ({ node, children, ...props }: any) => {
      return (
        <ul className="ml-4 list-inside text-sm font-medium" {...props}>
          {children}
        </ul>
      );
    },
    strong: ({ node, children, ...props }: any) => {
      return (
        <span className="text-sm font-medium font-semibold" {...props}>
          {children}
        </span>
      );
    },
    h1: ({ node, children, ...props }: any) => {
      return (
        <h1 className="mb-4 mt-6 text-2xl font-bold" {...props}>
          {children}
        </h1>
      );
    },
    h2: ({ node, children, ...props }: any) => {
      return (
        <h2 className="mb-3 mt-5 text-xl font-semibold" {...props}>
          {children}
        </h2>
      );
    },
    h3: ({ node, children, ...props }: any) => {
      return (
        <h3 className="mb-2 mt-4 text-lg font-semibold" {...props}>
          {children}
        </h3>
      );
    },
    h4: ({ node, children, ...props }: any) => {
      return (
        <h4 className="mb-2 mt-3 text-base font-semibold" {...props}>
          {children}
        </h4>
      );
    },
    h5: ({ node, children, ...props }: any) => {
      return (
        <h5 className="mb-1 mt-2 text-sm font-semibold" {...props}>
          {children}
        </h5>
      );
    },
    h6: ({ node, children, ...props }: any) => {
      return (
        <h6 className="mb-1 mt-2 text-sm font-medium" {...props}>
          {children}
        </h6>
      );
    },
    p: ({ node, children, ...props }: any) => {
      return (
        <p className="text-sm font-medium" {...props}>
          {children}
        </p>
      );
    },
    blockquote: ({ node, children, ...props }: any) => {
      return (
        <blockquote
          className="my-3 border-l-4 border-gray-300 pl-4 italic dark:border-gray-600"
          {...props}
        >
          {children}
        </blockquote>
      );
    },
    a: ({ node, children, href, ...props }: any) => {
      return (
        <a
          href={href}
          className="text-blue-600 hover:underline dark:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    },
    hr: ({ node, ...props }: any) => {
      return (
        <hr
          className="my-4 border-t border-zinc-300 dark:border-zinc-600"
          {...props}
        />
      );
    },
    img: ({ node, src, alt, ...props }: any) => {
      return (
        <img
          src={src}
          alt={alt}
          className="my-4 h-auto max-w-full rounded-lg"
          loading="lazy"
          {...props}
        />
      );
    },
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={components}
      className={bgColor}
    >
      {children}
    </ReactMarkdown>
  );
};

export const Markdown = React.memo(
  NonMemoizedMarkdown,
  (prevProps, nextProps) => prevProps.children === nextProps.children,
);
