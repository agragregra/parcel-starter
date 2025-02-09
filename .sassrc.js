const globImporter = require('node-sass-glob-importer')

module.exports = {
  loadPaths: ['./node_modules'],
  silenceDeprecations: ['legacy-js-api', 'mixed-decls', 'color-functions', 'global-builtin', 'import'],
  importer: globImporter(),
}
