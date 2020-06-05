const gulp = require('gulp')
const pug = require('gulp-pug')
const plumber = require('gulp-plumber')
const htmlValidator = require('gulp-w3c-html-validator')
const pugLinter = require('gulp-pug-linter')


module.exports = function html() {
    return gulp.src('src/pages/*.pug')
        .pipe(plumber())
	.pipe(pugLinter({ reporter: 'default' }))
        .pipe(pug({ pretty: true }))
        .pipe(htmlValidator())
        .pipe(gulp.dest('build/'))
} 
