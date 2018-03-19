const gulp           = require('gulp');
const sass           = require('gulp-sass');
const sourcemaps     = require('gulp-sourcemaps');
const postcss        = require('gulp-postcss');
const autoprefixer   = require('autoprefixer');
const mqpacker       = require('css-mqpacker');
const csso           = require('postcss-csso');
const plumber        = require('gulp-plumber');
const notify         = require('gulp-notify');
const path           = require('../path');

var processors = [
	autoprefixer({
		browsers: ['last 4 versions'],
		cascade: false
	}),
	require('lost'),
	mqpacker({
		sort: sortMediaQueries
	}),
	csso
];


gulp.task('sass', function() {
	return gulp
		.src(path.dev.sass + '/**/*.{scss,sass}')
		.pipe(plumber({
			errorHandler: notify.onError(function(err) {
				return {
					title: 'SASS ERROR',
					message: err.message
				};
			})
		}))
		.pipe(sourcemaps.init())
		.pipe(sass({
				outputStyle: 'expanded', // nested, expanded, compact, compressed
				precision: 5,
				indentType: 'tab',
				indentWidth: 1
			}))
		.pipe(postcss(processors))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dev/css'));
});

gulp.task('sass:watch', function() {
	gulp.watch(path.dev.sass + '/**/*.{scss,sass}', ['sass']);
});


function isMax(mq) {
	return /max-width/.test(mq);
}

function isMin(mq) {
	return /min-width/.test(mq);
}

function sortMediaQueries(a, b) {
	A = a.replace(/\D/g, '');
	B = b.replace(/\D/g, '');

	if (isMax(a) && isMax(b)) {
		return B - A;
	} else if (isMin(a) && isMin(b)) {
		return A - B;
	} else if (isMax(a) && isMin(b)) {
		return 1;
	} else if (isMin(a) && isMax(b)) {
		return -1;
	}

	return 1;
}