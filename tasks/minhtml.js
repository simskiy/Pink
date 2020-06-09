const gulp = require('gulp');
const rename = require('gulp-rename');
const minhtml = require('gulp-htmlmin');

module.exports = function minhtml() {
  return gulp.src('build/*.html')
    .pipe(minhtml({
      collapseWhitespace: true
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('build/'))
}
