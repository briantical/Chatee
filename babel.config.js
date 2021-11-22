module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        root: ['./src'],
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
