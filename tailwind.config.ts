import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '1.5rem',
  		screens: {
  			'2xl': '720px'
  		}
  	},
  	extend: {
		fontFamily: {
			serif: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			mono: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif']
		},
		fontSize: {
			// Headings
			'h1': ['30px', { lineHeight: '100%', fontWeight: '400' }],
			'h1-medium': ['30px', { lineHeight: '100%', fontWeight: '500' }],
			'h1-bold': ['30px', { lineHeight: '100%', fontWeight: '700' }],
			'h2': ['24px', { lineHeight: '32px', fontWeight: '400' }],
			'h2-medium': ['24px', { lineHeight: '32px', fontWeight: '500' }],
			'h2-bold': ['24px', { lineHeight: '32px', fontWeight: '700' }],
			'h3': ['20px', { lineHeight: '28px', fontWeight: '400' }],
			'h3-medium': ['20px', { lineHeight: '28px', fontWeight: '500' }],
			'h3-bold': ['20px', { lineHeight: '28px', fontWeight: '700' }],
			// Body
			'body-lg': ['18px', { lineHeight: '24px', fontWeight: '400' }],
			'body-lg-medium': ['18px', { lineHeight: '24px', fontWeight: '500' }],
			'body-lg-bold': ['18px', { lineHeight: '24px', fontWeight: '700' }],
			'body': ['16px', { lineHeight: '24px', fontWeight: '400' }],
			'body-medium': ['16px', { lineHeight: '24px', fontWeight: '500' }],
			'body-bold': ['16px', { lineHeight: '24px', fontWeight: '700' }],
			'body-sm': ['14px', { lineHeight: 'auto', fontWeight: '400' }],
			'body-sm-medium': ['14px', { lineHeight: 'auto', fontWeight: '500' }],
			'body-sm-bold': ['14px', { lineHeight: 'auto', fontWeight: '700' }],
		},
  		colors: {
			border: {
				DEFAULT: 'hsl(var(--border-default) / <alpha-value>)',
				muted: 'hsl(var(--border-muted) / <alpha-value>)'
			},
  			input: 'hsl(var(--border-default) / <alpha-value>)',
  			ring: 'hsl(var(--brand-primary) / <alpha-value>)',
  			background: 'hsl(var(--background-default) / <alpha-value>)',
  			foreground: 'hsl(var(--foreground-default) / <alpha-value>)',
  			primary: {
  				DEFAULT: 'hsl(var(--brand-primary) / <alpha-value>)',
  				foreground: 'hsl(var(--background-default) / <alpha-value>)'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--background-surface-hover) / <alpha-value>)',
  				foreground: 'hsl(var(--foreground-default) / <alpha-value>)'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--status-destructive) / <alpha-value>)',
  				foreground: 'hsl(var(--foreground-default) / <alpha-value>)'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--background-surface-hover) / <alpha-value>)',
  				foreground: 'hsl(var(--foreground-muted) / <alpha-value>)'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--background-accent) / <alpha-value>)',
  				foreground: 'hsl(var(--foreground-default) / <alpha-value>)'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--background-surface) / <alpha-value>)',
  				foreground: 'hsl(var(--foreground-default) / <alpha-value>)'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--background-surface) / <alpha-value>)',
  				foreground: 'hsl(var(--foreground-default) / <alpha-value>)'
  			},
			brand: {
				DEFAULT: 'hsl(var(--brand-primary) / <alpha-value>)',
			},
			status: {
				success: 'hsl(var(--status-success) / <alpha-value>)',
				'success-hover': 'hsl(var(--status-success-hover) / <alpha-value>)',
				warning: 'hsl(var(--status-warning) / <alpha-value>)',
				'warning-hover': 'hsl(var(--status-warning-hover) / <alpha-value>)',
				destructive: 'hsl(var(--status-destructive) / <alpha-value>)',
				'destructive-hover': 'hsl(var(--status-destructive-hover) / <alpha-value>)'
			},
  			cat: {
				income: 'hsl(var(--category-income-accent) / <alpha-value>)',
				debt: 'hsl(var(--category-loans-accent) / <alpha-value>)',
				investment: 'hsl(var(--category-investments-accent) / <alpha-value>)',
				transfer: 'hsl(var(--category-transfers-accent) / <alpha-value>)',
				legal: 'hsl(var(--category-legal-accent) / <alpha-value>)',
				services: 'hsl(var(--category-services-accent) / <alpha-value>)',
				leisure: 'hsl(var(--category-entertainment-accent) / <alpha-value>)',
				shopping: 'hsl(var(--category-shopping-accent) / <alpha-value>)',
				digital: 'hsl(var(--category-digital-accent) / <alpha-value>)',
				food: 'hsl(var(--category-food-accent) / <alpha-value>)',
				travel: 'hsl(var(--category-travel-accent) / <alpha-value>)',
				donation: 'hsl(var(--category-donations-accent) / <alpha-value>)',
				taxes: 'hsl(var(--category-taxes-accent) / <alpha-value>)',
				housing: 'hsl(var(--category-housing-accent) / <alpha-value>)',
				health: 'hsl(var(--category-health-accent) / <alpha-value>)',
				transport: 'hsl(var(--category-transport-accent) / <alpha-value>)',
				insurance: 'hsl(var(--category-insurance-accent) / <alpha-value>)',
				other: 'hsl(var(--category-other-accent) / <alpha-value>)',
			},
			surface: {
				DEFAULT: 'hsl(var(--background-surface) / <alpha-value>)',
				hover: 'hsl(var(--background-surface-hover) / <alpha-value>)',
			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--background-surface) / <alpha-value>)',
  				foreground: 'hsl(var(--foreground-default) / <alpha-value>)',
  				primary: 'hsl(var(--brand-primary) / <alpha-value>)',
  				'primary-foreground:': 'hsl(var(--background-default) / <alpha-value>)',
  				accent: 'hsl(var(--background-accent) / <alpha-value>)',
  				'accent-foreground': 'hsl(var(--foreground-default) / <alpha-value>)',
  				border: 'hsl(var(--border-default) / <alpha-value>)',
  				ring: 'hsl(var(--brand-primary) / <alpha-value>)'
  			}
  		},
  		borderRadius: {
  			lg: '0.5rem',
  			md: 'calc(0.5rem - 2px)',
  			sm: 'calc(0.5rem - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		boxShadow: {
  			'2xs': 'var(--shadow-2xs)',
  			xs: 'var(--shadow-xs)',
  			sm: 'var(--shadow-sm)',
  			md: 'var(--shadow-md)',
  			lg: 'var(--shadow-lg)',
  			xl: 'var(--shadow-xl)',
  			'2xl': 'var(--shadow-2xl)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
