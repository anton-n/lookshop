const gulp           = require('gulp');
const spritesmith    = require('gulp.spritesmith');
const del            = require('del');
const path           = require('../path');

gulp.task('cleansprite', function() {
	return del.sync(path.dev.sprite + '/sprite.png');
});

gulp.task('spritemade', function() {
	var spriteData = gulp.src(path.dev.sprite + '/*.png')
	.pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: '_sprite.sass',
		imgPath: path.dev.spriteImgPath,
		padding: 10,
		cssFormat: 'sass',
		algorithm: 'binary-tree',
		cssTemplate: 'sass.template.mustache',
		cssVarMap: function(sprite) {
			sprite.name = 's-' + sprite.name;
		}
	}));
	spriteData.img.pipe(gulp.dest(path.dev.sprite));
	spriteData.css.pipe(gulp.dest(path.dev.sass + '/_generated'));
	});

gulp.task('sprite', ['cleansprite', 'spritemade']);