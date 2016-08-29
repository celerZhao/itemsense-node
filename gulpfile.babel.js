'use strict';

const gulp       = require('gulp');
const babel      = require('gulp-babel');
const scriptSrc  = 'src/**/*.js';
const scriptDest = 'dist';
const testSrc    = './test/*.js';
const testDest   = 'built-tests';


gulp.task('babel', function () {
  return gulp.src([scriptSrc])
      .pipe(babel())
      .pipe(gulp.dest(scriptDest));
});

gulp.task('watch', function() {
  gulp.watch([scriptSrc], ['babel']);
});

gulp.task('default', ['babel', 'watch']);

gulp.task('buildTests', ['default'], function() {
  return gulp.src([testSrc])
      .pipe(babel())
      .pipe(gulp.dest(testDest));
});

gulp.task('watchTests', function() {
  gulp.watch([testSrc], ['test']);
});

gulp.task('test', ['buildTests', 'watchTests'], function() {
  var mocha = require('gulp-mocha');
  gulp.src(testDest + '/test.js', {read: false})
      .pipe(mocha());
})
