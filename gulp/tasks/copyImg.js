const gulp = require('gulp')

module.exports = function copyImg() {
  return gulp.src(['src/img/**/*.{gif,png,jpg,svg,webp}', '!src/img/sprite/**/*'])
    .pipe(gulp.dest('build/img'))
}
