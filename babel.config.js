module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@adapters': './src/Adapters',
          '@assets': './src/Assets',
          '@commons': './src/Commons',
          '@components': './src/Components',
          '@constants': './src/Constants',
          '@screens': './src/Screens',
          '@store': './src/Store',
          '@styles': './src/Styles',
        },
      },
    ],
  ],
};
