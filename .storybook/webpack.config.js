module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.md?$/,
    loader: 'markdown-loader',
  });
  return config;
};
