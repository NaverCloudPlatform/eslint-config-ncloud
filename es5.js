module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/es5',
    './rules/variables',
  ].map(require.resolve),
};
