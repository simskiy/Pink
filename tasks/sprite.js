const gulp = require('gulp');
const rename = require('gulp-rename');
const svgstore = require('gulp-svgstore');

module.exports = function sprite() {
  return gulp.src('src/images/**/icon-*.svg')
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('src/images/sprites'));
}
