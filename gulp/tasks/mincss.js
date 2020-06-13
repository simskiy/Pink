const gulp = require('gulp')
const plumber = require('gulp-plumber')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const shorthand = require('gulp-shorthand')


module.exports = function minCss() {
  return gulp.src('build/css/*.css')
    .pipe(plumber())
    .pipe(shorthand())
    .pipe(cleanCSS({
      debug: true,
      compatibility: '*'
    }, details => {
      console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/css'))

}
