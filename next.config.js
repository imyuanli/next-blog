const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // todo This configuration option will be removed in a future major version.
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // Optionally, add any other Next.js config below
}

module.exports = withMDX(nextConfig)