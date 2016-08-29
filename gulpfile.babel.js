'use strict';

const gulp       = require('gulp');
const babel      = require('gulp-babel');
const scriptSrc  = 'src/**/*.js';
const scriptDest = 'dist';


gulp.task('babel', function () {
  return gulp.src([scriptSrc])
      .pipe(babel())
      .pipe(gulp.dest(scriptDest));
});

gulp.task('watch', function() {
  gulp.watch([scriptSrc], ['babel']);
});

gulp.task('default', ['babel', 'watch']);
