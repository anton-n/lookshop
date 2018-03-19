const gulp           = require('gulp');
const concat         = require('gulp-concat');
const uglify         = require('gulp-uglify');
const rename         = require('gulp-rename');
const path           = require('../path');


gulp.task('js', function() {
	return gulp.src([
		'dev/libs/jquery/jquery-3.2.1.min.js',
		'dev/libs/slick-carousel/slick/slick.js',
		'dev/libs/svg4everybody/svg4everybody.legacy.js',
		'dev/js/custom.js',
		])
	.pipe(concat('main.js'))
	.pipe(gulp.dest(path.dev.js))
	.pipe(rename({
			prefix : '',
			basename: 'main',
			suffix: '.min',
			extname: '.js'
		}))
	.pipe(uglify())
	.pipe(gulp.dest(path.dev.js));
});

gulp.task('js:watch', function() {
	gulp.watch([path.dev.libs + '/**/*.js', path.dev.js + '/custom.js'], ['js']);
});