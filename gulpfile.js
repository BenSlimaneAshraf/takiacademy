var gulp = require('gulp'),
    concat = require('gulp-concat'),
    compass = require('gulp-compass');

var jsSources = [
  'components/scripts/script.js'
];
var sassSources = ['components/sass/style.scss'];

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('builds/development/js'))
});

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      image: 'builds/development/images',
      style: 'expanded'
    }))
    .pipe(gulp.dest('builds/development/css'))
});

gulp.task('default', ['js', 'compass']);
