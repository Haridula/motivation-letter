import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mt-8 mb-4 text-main">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold mt-6 mb-3 text-main">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold mt-4 mb-2 text-main">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl font-semibold mt-4 mb-2 text-main">
        {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-base mb-4 text-main leading-6">
      {children}
    </p>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-mauve hover:underline"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-main">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic text-subtext">
      {children}
    </em>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside mb-4 ml-4 text-main">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside mb-4 ml-4 text-main">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="mb-2">{children}</li>
  ),
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="max-w-xs h-auto rounded-lg my-4"
      width={200}
      height={200}
    />
  ),            
}

export function useMDXComponents(): MDXComponents {
  return components
}