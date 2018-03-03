var project_name = 'build';
var gulp = require('gulp');
var sass = require('gulp-sass');
var flatten = require('gulp-flatten');
var imagemin = require('gulp-imagemin');
var eslint = require('gulp-eslint');
var sassLint = require('gulp-sass-lint');
const webpack = require('webpack');

gulp.task('sass:lint', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError(1))
});

gulp.task('sass:compile', ['sass:lint'], function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(flatten())
    .pipe(gulp.dest(`./${project_name}/static/css`));
});

gulp.task('sass:compile-no-lint', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(flatten())
    .pipe(gulp.dest(`./${project_name}/static/css`));
});

gulp.task('sass:watch', ['sass:compile'], function () {
  gulp.watch('./src/**/*.scss', ['sass:compile']);
});

gulp.task('img', function() {
  gulp.src('./src/static/img/**/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest(`./${project_name}/static/img`));
});


gulp.task('watch', ['sass:watch', 'img']);

gulp.task('build:lint', ['sass:compile', 'img']);

gulp.task('lint', ['sass:lint']);

gulp.task('build', ['sass:compile-no-lint', 'img']);
