var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('serve', ['sass'], function() {
  //Watch for changes in scss files and trigger sass task
  gulp.watch('sass/**/*.scss', ['sass']);
  browserSync.init({
    server: "./"
  });
});

/* This task will compile .scss to css in dist and afterwards
 * stream changes to browserSync
 */
gulp.task('sass', function() {
  gulp.src('sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('css'))
      .pipe(browserSync.stream());
});

//Default gulp task will run serve task which itself will trigger sass task
gulp.task('default', ['serve']);
