const gulp           = require('gulp');
const imagemin       = require('gulp-imagemin');
const pngquant       = require('imagemin-pngquant');
const mozjpeg        = require('imagemin-mozjpeg');
const path           = require('../path');

gulp.task('imagemin', function() {
	return gulp
		.src([
			path.dev.img + '/**/*',
			'!' + path.dev.sprite + '/!(sprite.png)'
			])
		.pipe(imagemin([
			pngquant(),
			mozjpeg()
		],{
			verbose: true
		}))
		.pipe(gulp.dest(path.build.img));
});