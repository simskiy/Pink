const gulp = require('gulp')

const serve = require('./gulp/tasks/serve')
const pug2html = require('./gulp/tasks/pug2html')
const styles = require('./gulp/tasks/styles')
const script = require('./gulp/tasks/script')
const minCss = require('./gulp/tasks/mincss')
const fonts = require('./gulp/tasks/fonts')
const imageMinify = require('./gulp/tasks/imageMinify')
const clean = require('./gulp/tasks/clean')
const minjs = require('./gulp/tasks/minjs')
const copyDependencies = require('./gulp/tasks/copyDependencies')
const lighthouse = require('./gulp/tasks/lighthouse')
const svgSprite = require('./gulp/tasks/svgSprite')
const copyImg = require('./gulp/tasks/copyImg')

function setMode(isProduction = false) {
  return cb => {
    process.env.NODE_ENV = isProduction ? 'production' : 'development'
    cb()
  }
}

function setHTML(prettyHTML = true) {
  return cb => {
    pug2html(prettyHTML);
    cb();
  }
}

const dev = gulp.parallel(styles, script, fonts)
const build = gulp.series(clean, dev)

module.exports.svg = gulp.series(svgSprite)
module.exports.start = gulp.series(setMode(), setHTML(), build, copyImg, copyDependencies, serve)
module.exports.prod = gulp.series(setMode(true), setHTML(false), build, imageMinify, minCss, minjs, copyDependencies)
module.exports.dev = gulp.series(setMode(), serve)
module.exports.lighthouse = gulp.series(lighthouse)
