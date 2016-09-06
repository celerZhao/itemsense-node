'use strict';

const gulp       = require('gulp');
const babel      = require('gulp-babel');
const mocha      = require('gulp-mocha');
const del        = require('del');
const scriptSrc  = 'src/**/*.js';
const scriptDest = 'dist';
const testSrc    = './test/**/*.js';
const testDest   = 'built-tests';


gulp.task('default', [
                      'buildSource',
                      'watchSourceAndRebuild'
                    ]);


gulp.task('test', [
                    'runTests',
                    'watchAllAndRunTests',
                  ]);


gulp.task('buildSource', ['clean'], function() {
  return gulp.src([scriptSrc])
    .pipe(babel())
    .pipe(gulp.dest(scriptDest));
});

gulp.task('buildTests', ['clean'], function() {
  return gulp.src([testSrc])
      .pipe(babel())
      .pipe(gulp.dest(testDest));
});

gulp.task('watchSourceAndRebuild', function() {
  gulp.watch([scriptSrc], ['buildSource']);
});

gulp.task('watchAllAndRunTests', function() {
  gulp.watch([scriptSrc, testSrc], ['runTests']);
});

// Only way to ensure both build tasks complete before running tests
// is to add them as a dependency.
gulp.task('runTests', ['buildSource', 'buildTests'], function() {
  gulp.src(testDest + '/test.js', {read: false})
      .pipe(mocha().on("error", handleError));
});

gulp.task('clean', function() {
  return del(['dist', 'built-tests'])
});

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}




