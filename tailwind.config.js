/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: 'var(--clr-primary)',
        secondary: 'var(--clr-secondary)',
        'secondary-2': 'var(--clr-secondary-2)',
        'accent-1': 'var(--clr-accent-1)',
        'accent-2': 'var(--clr-accent-2)',
        'hover-1': 'var(--clr-hover-1)',
        'hover-2': 'var(--clr-hover-2)',
        'hover-3': 'var(--clr-hover-3)',
        light: 'var(--clr-light)',
        dark: 'var(--clr-dark)'
      },
      textColor: {
        primary: 'var(--clr-primary)',
        secondary: 'var(--clr-secondary)',
        'secondary-2': 'var(--clr-secondary-2)',
        'accent-1': 'var(--clr-accent-1)',
        'accent-2': 'var(--clr-accent-2)',
        'hover-1': 'var(--clr-hover-1)',
        'hover-2': 'var(--clr-hover-2)',
        'hover-3': 'var(--clr-hover-3)',
        light: 'var(--clr-light)',
        dark: 'var(--clr-dark)'
      },
      fontSize: {
        xs: 'var(--fs-200)',
        sm: 'var(--fs-300)',
        base: 'var(--fs-400)',
        xl: 'var(--fs-500)',
        '2xl': 'var(--fs-600)',
        '3xl': 'var(--fs-700)',
        '4xl': 'var(--fs-800)',
        '5xl': 'var(--fs-900)',
      },
      fontFamily: {
        'heading': ['Poppins'],
        'subheading': ['Raleway'],
        'serif': ['Roboto Slab'],
        'body': ['Roboto']
      },
    },
  },
  plugins: [],
}
