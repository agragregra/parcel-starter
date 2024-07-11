const globImporter = require('node-sass-glob-importer')

module.exports = {
	includePaths: ['./node_modules'],
	importer: globImporter(),
}
