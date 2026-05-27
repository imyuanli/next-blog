import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "scripts/**",
    "server/**",
  ]),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "scripts/**",
      "server/**",
    ],
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": ["off"],
      "prefer-const": ["error"],
      "@next/next/no-html-link-for-pages": ["off"],
      "react-hooks/immutability": ["warn"],
      "react-hooks/incompatible-library": ["warn"],
      "react-hooks/preserve-manual-memoization": ["warn"],
      "react-hooks/purity": ["warn"],
      "react-hooks/refs": ["warn"],
      "react-hooks/set-state-in-effect": ["warn"],
      "react-hooks/static-components": ["warn"],
      "react/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "never",
        },
      ],
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-curly-spacing": ["error", "never"],
    },
  },
]);

export default eslintConfig;
