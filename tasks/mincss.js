const gulp = require('gulp');
const minify = require('gulp-csso');
const rename = require('gulp-rename');


module.exports = function mincss() {
  return gulp.src('build/*.css')
    .pipe(minify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('build/css'))
}

