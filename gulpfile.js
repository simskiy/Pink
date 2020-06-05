const gulp = require('gulp');

const styles = require('./tasks/styles')
const html = require('./tasks/html')

function setMode(isProduction = false) {
	return cb => {
		process.env.NODE_ENV = isProduction ? 'production' : 'development'
		cb()
	}
}

const build = gulp.parallel(styles, html)

module.exports.start = gulp.series(setMode(), build)
module.exports.build = gulp.series(setMode(true), build)
