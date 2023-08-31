/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "sm": "640px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          //别人的额
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
          },

          //卡片式
          // css: {
          //   color: '#333',
          //   h1: {
          //     color: '#000',
          //     fontWeight: 'bold',
          //     fontSize: '2rem',
          //     marginBottom: '1rem',
          //   },
          //   h2: {
          //     color: '#000',
          //     fontWeight: 'bold',
          //     fontSize: '1.5rem',
          //     marginBottom: '0.75rem',
          //   },
          //   p: {
          //     marginBottom: '1rem',
          //   }
          // },

          //强调标题
          // css: {
          //   color: '#333',
          //   h1: {
          //     color: '#000',
          //     fontWeight: 'bold',
          //     fontSize: '3rem',
          //     marginBottom: '1rem',
          //   },
          //   h2: {
          //     color: '#000',
          //     fontWeight: 'bold',
          //     fontSize: '2rem',
          //     marginBottom: '0.75rem',
          //     borderBottom: '2px solid #000',
          //     paddingBottom: '0.5rem',
          //   },
          //   p: {
          //     marginBottom: '1rem',
          //   },
          // },

          //简洁
          // css: {
          //   color: '#333',
          //   h1: {
          //     color: '#000',
          //     fontWeight: 'bold',
          //     fontSize: '2.5rem',
          //     marginBottom: '1rem',
          //   },
          //   h2: {
          //     color: '#000',
          //     fontWeight: 'bold',
          //     fontSize: '2rem',
          //     marginBottom: '0.75rem',
          //   },
          //   p: {
          //     marginBottom: '1rem',
          //   },
          // },

          //卡片
          // css: {
          //   color: '#333',
          //   h1: {
          //     color: '#000',
          //     fontWeight: 'bold',
          //     fontSize: '2rem',
          //     marginBottom: '1rem',
          //   },
          //   h2: {
          //     color: '#000',
          //     fontWeight: 'bold',
          //     fontSize: '1.5rem',
          //     marginBottom: '0.75rem',
          //   },
          //   p: {
          //     marginBottom: '1rem',
          //   },
          // },

          // 强调段落
          // css: {
          //   color: '#333',
          //   h1: {
          //     color: '#000',
          //     fontWeight: 'bold',
          //     fontSize: '2rem',
          //     marginBottom: '1rem',
          //   },
          //   h2: {
          //     color: '#000',
          //     fontWeight: 'bold',
          //     fontSize: '1.5rem',
          //     marginBottom: '0.75rem',
          //   },
          //   p: {
          //     marginBottom: '1rem',
          //     fontStyle: 'italic',
          //   },
          // },

          // css: {
          //   color: '#333',
          //   h1: {
          //     color: '#000',
          //     fontWeight: 'bold',
          //     fontSize: '2.5rem',
          //     marginTop: '1.5rem',
          //     marginBottom: '1rem',
          //   },
          //   h2: {
          //     color: '#000',
          //     fontWeight: 'bold',
          //     fontSize: '2rem',
          //     marginTop: '1.25rem',
          //     marginBottom: '0.75rem',
          //   },
          //   h3: {
          //     color: '#000',
          //     fontWeight: 'bold',
          //     fontSize: '1.75rem',
          //     marginTop: '1rem',
          //     marginBottom: '0.5rem',
          //   },
          //   p: {
          //     marginTop: '1rem',
          //     marginBottom: '1rem',
          //   },
          //   a: {
          //     color: '#3182ce',
          //     textDecoration: 'underline',
          //   },
          //   blockquote: {
          //     borderLeft: '4px solid #3182ce',
          //     paddingLeft: '1rem',
          //     marginLeft: '0',
          //     marginRight: '0',
          //   },
          // },

        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
}