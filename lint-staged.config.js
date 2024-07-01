module.exports = {
  'apps/**/*.ts?(x)': (filenames) => ['yarn format:write', 'yarn validate'],
}
