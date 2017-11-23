process.env.DISABLE_NOTIFIER = true;
// elixir.config.sourcemaps = false;

var bowerDir = 'assets/vendor/';
var gulp = require("gulp");
var php = require('gulp-connect-php');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minifier');
var wait = require('gulp-wait');   
var browserSync = require('browser-sync').create();


/*
 |--------------------------------------------------------------------------
 | SASS
 |--------------------------------------------------------------------------
*/
gulp.task('sass-compile', function () { 
    gulp.src([
        'assets/sass/*.scss',
        'assets/sass/pages/*.scss',
        'assets/sass/cms/*.scss'
        ])
        .pipe(wait(2000))
        .pipe(sass())
        .pipe(minify({
            minify: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyJS: true,
            minifyCSS: true,
            getKeptComment: function (content, filePath) {
                var m = content.match(/\/\*![\s\S]*?\*\//img);
                return m && m.join('\n') + '\n' || '';
            }
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});
gulp.task('css-move', function () { 
    gulp.src([
        'dist/css/style.css',
        'dist/css/panel.css'
        ])
        .pipe(wait(2000))
        .pipe(gulp.dest('')); 
}); 
gulp.task('sass', ['sass-compile','css-move']);


/*
 |--------------------------------------------------------------------------
 | JS
 |--------------------------------------------------------------------------
*/
gulp.task('js-plugin', function () {
    gulp.src([        
        'assets/vendor/slick-carousel/slick/slick.min.js',
        'assets/vendor/responsive-img.js/responsive-img.js',
        'assets/vendor/page-scroll-effects/js/velocity.min.js',
        'assets/vendor/page-scroll-effects/js/velocity.ui.min.js',
        'assets/vendor/page-scroll-effects/js/main.js'
    ])
    .pipe(minify({
        minify: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyJS: true,
        minifyCSS: true,
        getKeptComment: function (content, filePath) {
            var m = content.match(/\/\*![\s\S]*?\*\//img);
            return m && m.join('\n') + '\n' || '';
        }
    }))
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('dist/js'));
});
gulp.task('js-script', function () {
    gulp.src([        
        'assets/js/*.js'
    ])
    .pipe(minify({
        minify: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyJS: true,
        minifyCSS: true,
        getKeptComment: function (content, filePath) {
            var m = content.match(/\/\*![\s\S]*?\*\//img);
            return m && m.join('\n') + '\n' || '';
        }
    }))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});


/*
 |--------------------------------------------------------------------------
 | PHP
 |--------------------------------------------------------------------------
*/
gulp.task('php', function() {
    php.server({ base: '', port: 3000, keepalive: true});
});


/*
 |--------------------------------------------------------------------------
 | RUN 
 |--------------------------------------------------------------------------
*/
gulp.task('serve', ['sass', 'js-plugin', 'js-script'], function() {
    browserSync.init({
        // proxy: "http://localhost/hanzputro/wordpress/ccw2017"
        proxy: "wp.dev/wp-admin"
    });
    gulp.watch(['assets/sass/*/**.scss'], ['sass']);
    gulp.watch('assets/js/*.js', ['js-script']);
    gulp.watch('*.php', ['php']).on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'js-plugin', 'js-script']);
