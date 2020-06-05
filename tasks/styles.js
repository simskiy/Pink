const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssbeautify = require('gulp-cssbeautify')
const plumber = require('gulp-plumber')
const sourcemaps = require('gulp-sourcemaps')

module.exports = function styles() {
	return gulp.src('src/styles/*.sass')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cssbeautify())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('build/css'))
}
