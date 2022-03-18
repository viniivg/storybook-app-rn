module.exports = {
  stories: ['../storybook/stories'],
  webpackFinal: async config => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
      '@storybook/react-native': '@storybook/react',
    };

    config.module.rules.push({
      test: /\.stories\.tsx?$/,
      use: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    });

    config.module.rules[0].use[0].options.plugins.push([
      'react-native-web',
      { commonjs: true },
    ]);
    return config;
  },
};