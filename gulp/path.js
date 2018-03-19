var build = 'build';
var dev   = 'dev';

var path = {
	dev: {
		root:   dev,
		css:    dev + '/css',
		sass:   dev + '/sass',
		js:     dev + '/js',
		fonts:  dev + '/fonts',
		img:    dev + '/img',
		sprite: dev + '/img/sprite',
		libs:   dev + '/libs',
		spriteImgPath: '../img/sprite/sprite.png',
		templates: 'src/templates',
	},
	build: {
		root:   build,
		css:    build + '/css',
		js:     build + '/js',
		fonts:  build + '/fonts',
		img:    build + '/img',
		sprite: build + '/img/sprite'
	}
};

module.exports = path;