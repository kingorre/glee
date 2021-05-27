const { src, dest, watch, parallel, series }  = require('gulp');
const scss            = require('gulp-sass');
const concat          = require('gulp-concat');
const autoprefixer    = require('gulp-autoprefixer');
const uglify          = require('gulp-uglify');
const imagemin        = require('gulp-imagemin');
const del             = require('del');
const browserSync     = require('browser-sync').create();
const svgSprite       = require('gulp-svg-sprite');
const gulpStylelint   = require('gulp-stylelint');
const fileinclude     = require('gulp-file-include');

function fileInclude() {
  return src('app/html/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('./app/'));
}

function svgSprites() {
  return src('app/images/pre-sprites/**.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(dest('app/images/sprites/'))
}

function browsersync() {
  browserSync.init ({
    server: {
      baseDir: 'app/'
    }
  });
}

function styles() {
  return src([
    'node_modules/slick-carousel/slick/slick.scss',
    'app/scss/style.scss'
  ])
    .pipe(scss({outputStyle: 'expanded'}))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.min.js',
    'node_modules/mixitup/dist/mixitup.min.js',
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
    'node_modules/rateyo/src/jquery.rateyo.js',
    'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
    'app/js/main.js'
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js'))
  .pipe(browserSync.stream())
}

function images() {
  return src('app/images/**/*.*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
  ]))
  .pipe(dest('dist/images'))
}

function build() {
  return src([
    'app/**/*.html',
    'app/css/style.min.css',
    'app/js/main.min.js'
  ], {base: 'app'})
  .pipe(dest('dist'))
}

function lintCss() {
  return src('app/scss/**/*.scss')
    .pipe(gulpStylelint({
      reporters: [
        {
          formatter: 'string', 
          console: true
        }
      ]
    }));
}

function cleanDist() {
  return del('dist')
}

function watching () {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/**/*.html']).on('change', browserSync.reload);
  watch(['app/images/pre-sprites/**.svg'], svgSprites);
  watch(['app/html/**/*.html'], fileInclude);
}

exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;
exports.lintCss = lintCss;
exports.fileInclude = fileInclude;
exports.build = series(cleanDist, images, build);

exports.default = parallel(styles, scripts, browsersync, watching, svgSprites, fileInclude);