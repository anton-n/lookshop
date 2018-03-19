const gulp           = require('gulp');
const path           = require('../path');

gulp.task('copy',  function() {

	var buildHtml = gulp.src(path.dev.root + '/*.html')
		.pipe(gulp.dest(path.build.root));

	var buildFonts = gulp.src(path.dev.fonts + '/**/*')
		.pipe(gulp.dest(path.build.fonts));

	var buildCss = gulp.src(path.dev.css + '/main.css')
		.pipe(gulp.dest(path.build.css));

	var buildJs = gulp.src(path.dev.js + '/main.min.js')
		.pipe(gulp.dest(path.build.js));

});