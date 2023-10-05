module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier', // prettier should be last to prevent conflicts with other plugins
  ],
  rules: {
    'prettier/prettier': 'warn',
    // ignore
    'import/prefer-default-export': 0,
    'import/no-anonymous-default-export': 0,
    'react/jsx-filename-extension': 0,
    'import/extensions': 0,
    'react/display-name': 0,
    'react/function-component-definition': 0,
    'react/require-default-props': 0,
  },
}
