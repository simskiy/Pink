const gulp = require('gulp');
const del = require('del');

const styles = require('./tasks/styles');
const html = require('./tasks/html');
const htmlmin = require('./tasks/minhtml');
const cssmin = require('./tasks/mincss');
const imagemin = require('./tasks/imagemin');
const webp = require('./tasks/webp');
const sprite = require('./tasks/sprite');

function clean() {
  return del(['./build/*']);
}

// function images() {
//   return gulp.src([
//     'src/images/**/*.{png,jpg,svg}'
//   ], {
//     base: 'images'
//   })
//     .pipe(gulp.dest('./build/img'))
// }

function images() {
  return gulp.src('src/images/**/*.{png,jpg,svg}')
    .pipe(gulp.dest('./build/img'))
}

function scripts() {
  return gulp.src('./build/js/*')
    .pipe(gulp.dest('./build/js'))
}

exports.start = gulp.series(clean, gulp.parallel(html, styles, images, scripts));
exports.dev = gulp.parallel(html, styles, images, scripts);
exports.build = gulp.series(htmlmin, cssmin, imagemin);
exports.sprite = gulp.series(sprite);
exports.webp = gulp.series(webp);
