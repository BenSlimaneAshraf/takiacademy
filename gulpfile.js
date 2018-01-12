var gulp = require('gulp'),
    concat = require('gulp-concat');

var jsSources = [
  'components/scripts/script.js'
];

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('builds/development/js'))
});
