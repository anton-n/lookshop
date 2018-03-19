const gulp           = require('gulp');
const svgSprite      = require('gulp-svg-sprite');
const	svgmin         = require('gulp-svgmin');
const	cheerio        = require('gulp-cheerio');
const	replace        = require('gulp-replace');
const del            = require('del');
const path           = require('../path');

gulp.task('cleanSvg', function() {
	return del.sync('./dev/img/svg/sprite.svg');
});

gulp.task('svgGo', function () {
	return gulp.src('./dev/img/svg/*.svg')
	// minify svg
	.pipe(svgmin({
		js2svg: {
			pretty: true
		}
	}))
		// remove all fill, style and stroke declarations in out shapes
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
				$('style').remove();
			},
			parserOptions: {xmlMode: true}
		}))
		// cheerio plugin create unnecessary string '&gt;', so replace it.
		.pipe(replace('&gt;', '>'))
		// build svg sprite
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: '../sprite.svg',
					render: {
						sass: {
							dest:'../../../sass/_generated/_svg-sprite.sass',
							template:'./dev/sass/_mixins/_sprite_template.sass'
						}
					}
				}
			}
		}))
		.pipe(gulp.dest('./dev/img/svg/'));
	});

gulp.task('svg', ['cleanSvg', 'svgGo']);