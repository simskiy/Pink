const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const plumber = require('gulp-plumber')

module.exports = function imageMinify() {
  return gulp.src(['src/img/**/*.{gif,png,jpg,svg,webp}', '!src/img/sprite/**/*'])
    .pipe(plumber())
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(gulp.dest('build/img'))
}

