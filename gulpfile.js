var gulp = require('gulp');
var del = require('del');
var gulpLoadPlugins = require('gulp-load-plugins');
var $ = gulpLoadPlugins();

gulp.task('clean', del.bind(null, ['dist']));

gulp.task('styles', function () {
    return gulp.src('src/app/components/**/*.scss')
        .pipe($.concat('main.css'))
        .pipe($.sourcemaps.init())
        .pipe($.sass.sync().on('error', $.sass.logError))
        .pipe($.autoprefixer({browsers: ['last 1 version']}))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('vendor-js', function() {
    var scripts = [
        'bower_components/lodash/lodash.min.js',
        'bower_components/es6-promise/promise.min.js',
        'bower_components/fetch/fetch.js',
        'bower_components/react/react.js',
        'bower_components/require1k/require1k.min.js'];

    return gulp.src(scripts)
        .pipe($.concat('vendor.js'))
        .pipe(gulp.dest('dist/scripts'))
});

gulp.task('scripts', function () {
    return gulp.src(['src/app/**/*.jsx', 'src/app/*.js'])
        .pipe($.sourcemaps.init())
        .pipe($.babel())
        //.pipe($.uglify())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['html', 'styles', 'vendor-js', 'scripts']);