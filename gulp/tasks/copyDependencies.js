// const path = require('path')
const gulp = require('gulp')
// const npmDist = require('gulp-npm-dist')
// const del = require('del')

// const config = require('../config')

// module.exports = function copyModules(cb) {
//   del(config.copyDependencies.dist).then(() => {
//     gulp.src(npmDist(), { base: path.join(config.root, 'node_modules') })
//       .pipe(gulp.dest(config.copyDependencies.dist)).on('end', cb)
//   }).catch(cb)
// }

module.exports = function copyModules() {
  return gulp.src(`src/local_modules/normalize.css/*`)
    .pipe(gulp.dest(`build/css`))
}
