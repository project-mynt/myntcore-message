'use strict';

var gulp = require('gulp');
var myntcoreTasks = require('myntcore-build');

myntcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
