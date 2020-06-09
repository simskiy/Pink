const gulp = require('gulp');
const webp = require('gulp-webp');

module.exports = function webp() {
  return gulp.src('src/images/**/*.{png,jpg}')
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest('build/img'))
}
