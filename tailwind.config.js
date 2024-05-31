const mode =
  process.env.NODE_ENV === 'development' ? 'development' : 'production';

module.exports = {
  content: ['./src/**/*.{js,liquid}'],
  theme: {
    extend: {
      borderRadius: {

      },
      fontSize: {
        h1: [
          '2.5rem',
          {
            lineHeight: '1.2',
            fontWeight: '600',
          },
        ],
        h2: [
          '2rem',
          {
            lineHeight: '1.3',
            fontWeight: '600',
          },
        ],
        h3: [
          '1.5rem',
          {
            lineHeight: '1.3',
            fontWeight: '600',
          },
        ],
        h4: [
          '1.25rem',
          {
            lineHeight: '1.4',
            fontWeight: '600',
          },
        ],
        h5: [
          '1.125rem',
          {
            lineHeight: '1.4',
            fontWeight: '600',
          },
        ],
        xxxs: [
          '0.5rem',
          {
            lineHeight: '1.2',
          },
        ],
        xxs: [
          '0.625rem',
          {
            lineHeight: '1.4',
          },
        ],
        xs: [
          '0.75rem',
          {
            lineHeight: '1.8',
          },
        ],
        lg: [
          '1.125rem',
          {
            lineHeight: '1.8',
          },
        ],
        xl: [
          '1.25rem',
          {
            lineHeight: '1.8',
          },
        ],
        md: [
          '1rem',
          {
            lineHeight: '1.8',
          },
        ],
        sm: [
          '0.875rem',
          {
            lineHeight: '1.8',
          },
        ]
      },
      lineHeight: {
        1: '1.1',
        1.5: '1.15',
        2: '1.2',
        2.5: '1.25',
        3: '1.3',
        3.5: '1.35',
        4: '1.4',
        4.5: '1.45',
        5: '1.5',
        5.5: '1.55',
        6: '1.6',
        6.5: '1.65',
        7: '1.7',
        7.5: '1.75',
        8: '1.8',
        8.5: '1.85',
        9: '1.9',
        9.5: '1.95',
        10: '2',
      },
      colors: {
        primary: 'var(--color-primary)',
        primaryDarker: 'var(--color-primary-darker)',
        secondary: 'var(--color-secondary)',
        body: 'var(--color-body)',
        subtext: 'var(--color-subtext)',
        border: 'var(--color-border)',
        background: 'var(--color-background)',
        error: 'var(--color-error)',
        warning: 'var(--color-warning)',
        success: 'var(--color-success)',
        sale: 'var(--color-sale)',
        hot: 'var(--color-hot)',
        new: 'var(--color-new)',
        soldout: 'var(--color-sold-out)',
        overlay: 'rgba(0,0,0,0.5)'
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': 'calc(100%/3)',
        '2/3': 'calc(200%/3)',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': 'calc(100%/6)',
        '5/6': 'calc(500%/6)'
      },
      padding: {

      },
      fontFamily: {
        body: ['var(--font-body)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    function({ addUtilities }) {
        const generateOpacityClasses = (colorName) => {
            const classes = {};
            for (let i = 0; i <= 100; i++) {
                classes[`.bg-${colorName}-opacity-${i}`] = {
                    'background-color': `color-mix(in srgb, var(--color-${colorName}) ${i}%, transparent)`,
                };
                classes[`.text-${colorName}-opacity-${i}`] = {
                    'color': `color-mix(in srgb, var(--color-${colorName}) ${i}%, transparent)`,
                };
                classes[`.border-${colorName}-opacity-${i}`] = {
                    'border-color': `color-mix(in srgb, var(--color-${colorName}) ${i}%, transparent)`,
                };
            }
            return classes;
        };

        const newUtilities = {
            ...generateOpacityClasses('primary'),
            ...generateOpacityClasses('secondary'),
            ...generateOpacityClasses('body'),
            ...generateOpacityClasses('subtext'),
            ...generateOpacityClasses('border'),
            ...generateOpacityClasses('background'),
            ...generateOpacityClasses('overlay'),
            ...generateOpacityClasses('error'),
            ...generateOpacityClasses('warning'),
            ...generateOpacityClasses('success'),
            ...generateOpacityClasses('sale'),
            ...generateOpacityClasses('hot'),
            ...generateOpacityClasses('new'),
            ...generateOpacityClasses('soldout')
        };

        addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ]
};
