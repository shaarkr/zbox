module.exports = {
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'flow',
      },
    },
  ],
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  useTabs: false,
  arrowParens: 'avoid',
}
