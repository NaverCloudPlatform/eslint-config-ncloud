module.exports = {
  env: {
    jquery: true,
    browser: true,
  },
  rules: {
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', 'never'],

    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': ['error', { args: 'none' }],

    // https://eslint.org/docs/rules/wrap-iife
    'wrap-iife': ['error', 'inside'],

    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'off',

    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'off',

    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': ['error', 'except-parens'],
  },
};
