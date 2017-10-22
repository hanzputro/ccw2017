process.env.DISABLE_NOTIFIER = true;
// elixir.config.sourcemaps = false;

var bowerDir = 'assets/vendor/';
var gulp = require("gulp");
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minifier');    
var livereload = require('gulp-livereload');


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
        .pipe(gulp.dest('dist/css'));
        // .pipe(livereload()); 
});
gulp.task('css-move', function () { 
    gulp.src([
        'dist/css/style.css',
        'dist/css/panel.css'
        ])
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
    // .pipe(livereload());
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
    .pipe(gulp.dest('dist/js'));
    // .pipe(livereload());
});


/*
 |--------------------------------------------------------------------------
 | RUN 
 |--------------------------------------------------------------------------
*/
// gulp.task('watch', function() {
//     livereload.listen();
//     gulp.watch('css/**.scss', ['sass']);
//     gulp.watch('js/**.js', ['js']);
// });
gulp.task('default', ['sass', 'js-plugin', 'js-script']);
