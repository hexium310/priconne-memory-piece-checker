module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      [
        '@babel/preset-typescript',
        {
          onlyRemoveTypeImports: true
        }
      ],
      '@emotion/babel-preset-css-prop',
    ],
    ...(!api.env('production') && { plugins: ['react-refresh/babel'] }),
  };
};
