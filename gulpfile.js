var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('default', ['minifyJS', 'minifyCSS', 'imageMin']);

gulp.task('minifyJS', function() {
	return gulp.src('public/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('public/build/js/'));
});

gulp.task('minifyCSS', function() {
	return gulp.src('public/styles/**/*.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('public/build/styles/'));
});

gulp.task('imageMin', function() {
	return gulp.src('public/images/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('public/build/images'));
});