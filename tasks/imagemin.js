const gulp = require('gulp');
const imagemin = require('gulp-imagemin');


module.exports = function imagemin() {
  return gulp.src('src/images/**/*.{png,jpg,svg}')
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      optimizationLevel: 3,
      svgoPlugins: [
        {
          removeViewBox: true
        }
      ]
    }))
    .pipe(gulp.dest('build/img'))
}
