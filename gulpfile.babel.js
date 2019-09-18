'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');
const del = require('del');

const scriptSrc = 'src/**/*.js';
const scriptDest = 'dist';
const testSrc = './test/**/*.js';
const testDest = 'built-tests';

gulp.task('clean', function () {
  return del([scriptDest, testDest]);
});

gulp.task('buildSource', gulp.series('clean', function (done) {
  return gulp.src([scriptSrc])
    .pipe(babel().on("error", handleError))
    .pipe(gulp.dest(scriptDest));
  done();
}));

gulp.task('buildTests', gulp.series('buildSource', function (done) {
  return gulp.src([testSrc])
    .pipe(babel().on("error", handleError))
    .pipe(gulp.dest(testDest));
  done();
}));

// Only way to ensure both build tasks complete before running tests
// is to add them as a dependency.
gulp.task('runTests', gulp.series('buildTests', function (done) {
  gulp.src(testDest + '/test.js', { read: false })
    .pipe(mocha({ reporter: "nyan" })
    .on("error", handleError));
  done();
}));

gulp.task('test', gulp.series('runTests'));

gulp.task('default', gulp.series('buildSource'));

/*
gulp.task('default', [
  'buildSource',
  'watchSourceAndRebuild'
]);

gulp.task('test', [
  'runTests',
  'watchAllAndRunTests',
]);


gulp.task('watchSourceAndRebuild', function () {
  gulp.watch([scriptSrc], ['buildSource']);
});

gulp.task('watchAllAndRunTests', function () {
  gulp.watch([scriptSrc, testSrc], ['runTests']);
});

*/

function handleError(err) {
  console.log("Caught ERROR: ");
  console.log(err.toString());
  this.emit('end');
}

