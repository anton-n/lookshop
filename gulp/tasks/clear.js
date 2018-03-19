const gulp           = require('gulp');
const cache          = require('gulp-cache');

gulp.task('clear', function() {
	return cache.clearAll();
});