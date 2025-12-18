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
				DEFAULT: 'hsl(var(--border))',
				muted: 'hsl(var(--border-muted))'
			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			insight: {
  				positive: 'hsl(var(--insight-positive))',
  				negative: 'hsl(var(--insight-negative))',
  				neutral: 'hsl(var(--insight-neutral))',
  				warning: 'hsl(var(--insight-warning))'
  			},
			surface: {
				DEFAULT: 'hsl(var(--surface))',
				hover: 'hsl(var(--surface-hover))',
				warm: 'hsl(var(--surface-warm))',
				cool: 'hsl(var(--surface-cool))',
				highlight: 'hsl(var(--surface-highlight))',
				concern: 'hsl(var(--surface-concern))'
			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
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
