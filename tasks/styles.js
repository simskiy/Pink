const gulp = require('gulp');
const sass = require('gulp-sass');
const cssbeautify = require('gulp-cssbeautify');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

module.exports = function styles() {
  return gulp.src('src/styles/style.sass')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(cssbeautify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'))
}
