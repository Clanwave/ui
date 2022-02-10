module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials', '@storybook/addon-docs'],
  babelDefault: (config) => {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        [
          require.resolve('@babel/plugin-transform-react-jsx'),
          { pragma: 'h' },
          'preset',
        ],
      ],
    };
  },
};
