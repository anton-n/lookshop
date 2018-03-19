var gulp           = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var plumber        = require('gulp-plumber');
var gulpif         = require('gulp-if');
var changed        = require('gulp-changed');
var prettify       = require('gulp-prettify');
var frontMatter    = require('gulp-front-matter');
var path           = require('../path');

function renderHtml(onlyChanged) {
    nunjucksRender.nunjucks.configure({
        watch: false,
        trimBlocks: true,
        lstripBlocks: false
    });

    return gulp
        .src(['./dev/templates/**/[^_]*.html'])
        .pipe(plumber({
            // errorHandler: config.errorHandler
        }))
        .pipe(gulpif(onlyChanged, changed('./dev')))
        .pipe(frontMatter({ property: 'data' }))
        .pipe(nunjucksRender({
            // PRODUCTION: config.production,
            path: ['./dev/templates/']
        }))
        .pipe(prettify({
            indent_size: 2,
            wrap_attributes: 'auto', // 'force'
            preserve_newlines: false,
            // unformatted: [],
            end_with_newline: true
        }))
        .pipe(gulp.dest('./dev'));
}

gulp.task('nunjucks', function() {
    return renderHtml();
});

gulp.task('nunjucks:changed', function() {
    return renderHtml(true);
});

gulp.task('nunjucks:watch', function() {
    gulp.watch([
        './dev/templates/**/[^_]*.html'
    ], ['nunjucks:changed']);

    gulp.watch([
        './dev/templates/**/[^_]*.html'
    ], ['nunjucks']);
});