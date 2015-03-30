var gulp          = require('gulp');
var minifyCSS     = require('gulp-minify-css');
var sourcemaps    = require('gulp-sourcemaps');
var browserSync   = require('browser-sync');
var reload        = browserSync.reload;
var sass          = require('gulp-ruby-sass');
var autoprefixer  = require('gulp-autoprefixer');
var runSequence   = require('run-sequence');


var paths = {
  scss: './src',
  build_css: './dist',
};


gulp.task('sass', function () {
  return sass(paths.scss, { sourcemap: true })
    .on('error', function (err) {
        console.error('Error!', err.message);
     })
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(autoprefixer({browsers: ['> 2%', 'last 3 versions']}))
    .pipe(sourcemaps.write('./.'))
    .pipe(gulp.dest(paths.build_css))
    .pipe(reload({stream:true}));
});


gulp.task('minify', function() {
   gulp.src(paths.build_css+'/*.css')
    .pipe(sourcemaps.init())
    .pipe(minifyCSS({
      keepBreaks: false,
      aggressiveMerging: false,
      roundingPrecision: -1
    }))
    .pipe(sourcemaps.write('./.'))
    .pipe(gulp.dest(paths.build_css));

});

gulp.task('browser-sync', function() {
  browserSync({
    proxy: "localhost:8000"
  });
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['sass', 'watch', 'browser-sync']);

gulp.task('build', function(callback) {
  runSequence(['sass'], 'minify', callback);
});
