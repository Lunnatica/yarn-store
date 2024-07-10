module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack(config) {
    // Enable loading SVG files directly in components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      type: 'javascript/auto',
    });

    return config;
  },
};
