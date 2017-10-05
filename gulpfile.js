process.env.DISABLE_NOTIFIER = true;
// elixir.config.sourcemaps = false;
var elixir = require('laravel-elixir');
elixir.config.assetsPath = 'assets';
elixir.config.publicPath = 'dist';
elixir.config.viewPath = './';

var browserSync = require('laravel-elixir-browsersync-official');
var gulp = require("gulp");
var bowerDir = 'assets/vendor/';

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    //####################### CSS #######################//
    /* From Plugin */
    mix.styles(
        [
            'slick-carousel/slick/slick.css'
        ],'dist/css/plugins.css',bowerDir);
    /* core */
    mix.sass(
        [
            'core.scss'
        ],'dist/css/base.css');

    //####################### JS #######################//
    /* From Plugin */
    mix.scripts(
        [
            // 'jquery/jquery-1.11.3.min.js',       
            'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
            'responsive-img.js/responsive-img.js'
        ], 'dist/js/plugins.js',bowerDir);

    /* main */
    mix.scripts( 
        [
            'base.js'
        ],'dist/js/base.js');


    //################### VERSIONING ###################//
    mix.version([
        "css/plugins.css",
        "css/base.css",
        "js/plugins.js",
        "js/base.js"
    ]);

    mix.browserSync({
        files: ['**/*.html', 'dist/js/**/*.js', 'dist/css/**/*.css'],
        proxy: undefined,
        server: {
            baseDir: "./"
        }
    });
});

