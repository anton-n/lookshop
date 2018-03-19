const gulp           = require('gulp');
const runseq         = require('run-sequence');

gulp.task('build', function() {
	runseq (
		'del',
		'sass',
		'js',
		'copy',
		'imagemin'
	);

});