module.exports = {
  theme: {
    extend: {
      keyframes: {
        fallDown: {
          '0%': { transform: 'translateY(-100px) scale(1.1)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        glow1: {
          '0%, 100%': { transform: 'translate(-50%, -50%) translate(-5%, -5%) scale(1)' },
          '50%': { transform: 'translate(-50%, -50%) translate(5%, 5%) scale(1.1)' },
        },
        glow2: {
          '0%, 100%': { transform: 'translate(-50%, -50%) translate(5%, 5%) scale(1.1)' },
          '50%': { transform: 'translate(-50%, -50%) translate(-5%, -5%) scale(1)' },
        },
        'glow-float-1': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-5%, 5%)' },
          '50%': { transform: 'translate(5%, -5%)' },
          '75%': { transform: 'translate(-5%, -5%)' },
        },
        'glow-float-2': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(5%, -5%)' },
          '50%': { transform: 'translate(-5%, 5%)' },
          '75%': { transform: 'translate(5%, 5%)' },
        },
        blurIn: {
          '0%': { filter: 'blur(8px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blurOut: {
          '0%': { filter: 'blur(0)', opacity: '1' },
          '100%': { filter: 'blur(8px)', opacity: '0' },
        },
      },
      animation: {
        fallDown: 'fallDown 1s ease-out forwards',
        typing: 'typing 3.5s steps(40, end)',
        'glow-1': 'glow1 15s ease-in-out infinite',
        'glow-2': 'glow2 18s ease-in-out infinite',
        'glow-float-1': 'glow-float-1 20s ease-in-out infinite',
        'glow-float-2': 'glow-float-2 25s ease-in-out infinite',
        blurIn: 'blurIn 0.8s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-in forwards',
        blurOut: 'blurOut 0.5s ease-out forwards'
      },
      screens: {
        'max-h-700': {'raw': '(max-height: 700px)'}
      },
    },
  },
} 