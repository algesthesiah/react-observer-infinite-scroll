module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        transcludeMarkdown: true,
      },
    },
    '@storybook/preset-create-react-app',
    '@storybook/addon-essentials',
    // {
    //   name: '@storybook/preset-scss',
    //   options: {
    //     cssLoaderOptions: {
    //       modules: { localIdentName: '[name]__[local]--[hash:base64:5]' },
    //     },
    //   },
    // },
    '@storybook/addon-links',
  ],
  webpackFinal: webpackConfig => {
    const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
      ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'
    );
    const eslintPluginIndex = webpackConfig.resolve.plugins.findIndex(
      ({ constructor }) => constructor && constructor.name === 'ESLintWebpackPlugin'
    );
    webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
    webpackConfig.resolve.plugins.splice(eslintPluginIndex, 1);
    return webpackConfig;
  },
};
