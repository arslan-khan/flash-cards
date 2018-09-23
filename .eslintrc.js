module.exports = {
  extends: 'airbnb',
  plugins: ['import', 'react', 'jsx-a11y', 'react-native'],
  ecmaFeatures: {
    jsx: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      globalReturn: true,
      generators: false,
      objectLiteralDuplicateProperties: false,
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    'react-native/react-native': true,
  },
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': 0,
    'react/destructuring-assignment': 0,
  },
};
