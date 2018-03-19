const gulp           = require('gulp');
const del            = require('del');
const path           = require('../path');

gulp.task('del', function() {
	return del.sync(path.build.root);
});