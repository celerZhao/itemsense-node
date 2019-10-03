'use strict';

import { task, series, src, dest } from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import jest from 'gulp-jest';

const scriptSrc = 'src/**/*.js';
const scriptDest = 'dist';

const testSrc = 'test/**/*.js';
const testDest = 'built-tests';

task('clean', series(function () {
  return del([scriptDest, testDest]);
}));

task('buildSource', series('clean', function () {
  return src([scriptSrc])
    .pipe(babel().on("error", handleError))
    .pipe(dest(scriptDest));
}));

task('buildTests', series('buildSource', function () {
  return src([testSrc])
    .pipe(babel().on("error", handleError))
    .pipe(dest(testDest));
}));

// Only way to ensure both build tasks complete before running tests
// is to add them as a dependency.
task('runTests', series('buildTests', function () {
  process.env.NODE_ENV = 'test';
  return src(testDest + '/test.js', { read: false })
    .pipe(jest({
      "automock": false
    }));
}));

task('test', series('runTests'));

task('default', series('buildSource'));

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

