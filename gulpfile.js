var gulp     = require('gulp');
var plumber  = require('gulp-plumber')
var rename   = require('gulp-rename');
var to5      = require('gulp-6to5');
var watch    = require('gulp-watch');

gulp.task('default', function () {
  watch('*.es6.js')
    .pipe(plumber())
    .pipe(to5())
    .pipe(rename({ basename: 'app', suffix: '.es5' }))
    .pipe(gulp.dest('./build/'));
});
