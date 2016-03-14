var gulp = require('gulp');
 
gulp.task('default', function() {
  // This does nothing for now, we'll add functionality soon
});

gulp.task('copy', function() {
	return gulp.src('to-copy.txt')
		.pipe(gulp.dest('dev'));
});