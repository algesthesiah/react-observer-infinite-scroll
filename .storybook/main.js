module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        sourceLoaderOptions: null,
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
  webpackFinal: config => {
    console.log(config.module.rules);
    return {
      ...config,
      plugins: config.plugins.filter(plugin => {
        if (plugin.constructor.name === 'ESLintWebpackPlugin') {
          return false;
        }
        return true;
      }),
    };
  },
};
