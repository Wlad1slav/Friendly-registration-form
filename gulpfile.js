const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    // Build a CSS file from a Sass
    return src('scss/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask() {
    // Checking Sass file,
    // does it need to be updated
    watch(['scss/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)