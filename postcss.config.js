module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({
      autoprefixer: { grid: false },
      features: {
        'nesting-rules': true,
      },
      browsers: ['> 0.2%', 'last 2 versions', 'Firefox ESR'],
    }),
  ],
};
