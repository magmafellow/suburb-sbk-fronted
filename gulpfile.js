const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')(require('sass'))

// Static Server + watching scss/html files
function serve() {
  browserSync.init({
    server: './',
  })

  gulp.watch('src/sass/*.sass', buildStyles)
  gulp.watch('src/*.html').on('change', browserSync.reload); // EVENT MUST BE! NOT as callback
}

// Compile sass into CSS & auto-inject into browsers
function buildStyles() {
  return gulp
    .src('src/sass/*.sass')
    .pipe(sass({syntax: 'indented'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
}

exports.default = function(cb) {
  console.log('I am done')
  cb()
}
exports.watch = serve
