const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')(require('sass'))

// Static Server + watching scss/html files
function serve() {
  browserSync.init({
    server: './',
  })

  gulp.watch('src/sass/*.scss', buildStyles)
  gulp.watch('src/*.html').on('change', browserSync.reload); // EVENT MUST BE! NOT as callback
}

// Compile sass into CSS & auto-inject into browsers
function buildStyles() {
  return gulp
    .src('src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
}

exports.test = function(cb) {
  console.log('I am done')
  cb()
}
exports.default = serve
