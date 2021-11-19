module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'prettier', 'import', 'module-resolver'],
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
};
