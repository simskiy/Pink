const gulp = require('gulp')
const plumber = require('gulp-plumber')
const uglify = require('gulp-uglify-es').default
const rename = require('gulp-rename')

module.exports = function minjs() {
  return gulp.src('build/js/main.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('build/js'))
}
