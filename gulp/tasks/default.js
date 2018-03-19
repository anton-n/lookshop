const gulp           = require('gulp');
const runseq         = require('run-sequence');

gulp.task('default', function() {
	runseq (
		'sass',
		'js',
		'nunjucks',
		'browserSync',
		'sass:watch',
		'js:watch',
		'nunjucks:changed',
		'nunjucks:watch'
		);
});