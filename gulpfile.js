// gulp file

const gulp = require('gulp'); 

/* Start reqiure packages area */

// sass plugin 
let sass        = require('gulp-sass');

// pug plugin 
let pug         = require('gulp-pug');

// compress js files
let minify      = require('gulp-minify');

// compress css files
let cleanCSS    = require('gulp-clean-css');

// reload browser auto plugin
let browserSync = require('browser-sync');

// run sequence plugin to run task one by one
let runSequence = require('run-sequence');
/* End reqiure packages area */

/* Start directories area */
let myRoot  = './';
let layout  = myRoot + 'app/';
let src     = myRoot + 'src/';
let sassDir = src + 'sass';
let pugDir  = src + 'pug';
let jsDir   = 'js';
let cssDir  = 'css';
let htmlDir = layout + 'html/';
/* End directories area */

/* Start file path's area */
let sassFiles = sassDir + '/*.scss';
let jsFiles   = jsDir + '/*.js';
let cssFiles  = cssDir + '/*.css';
let pugFiles  = pugDir + '/**/*.pug';
let pugIndex  = pugDir + '/index.pug';
/* End file path's area */

// showt & prevent error stop the gulp script
function showError(err){
  console.log(err);
  this.emit('end');
}

// SASS task 
gulp.task('sassTask', ()=>{
  gulp.src(sassFiles)
      .pipe(sass())
      .on("error", showError)
      .pipe(gulp.dest(src + cssDir))
      .pipe(browserSync.stream());
});

// PUG task 
gulp.task('pugTask', ()=>{
  return gulp.src([
          '!' + pugIndex, 
          pugDir + '/*.pug'
        ])
        .pipe(pug({pretty: true}))
        .on("error", showError)
        .pipe(gulp.dest(htmlDir))
        .pipe(browserSync.stream());
});

// PUG task 
gulp.task('pugIndexTask', ()=>{
  return gulp.src(pugIndex)
        .pipe(pug({pretty: true}))
        .on("error", showError)
        .pipe(gulp.dest(myRoot))
        .pipe(browserSync.stream());
});

// JAVASCRIPT task
gulp.task('jsTask', ()=>{
  gulp.src(src + jsFiles)
      .pipe(minify({
        ext: { min:'.js' },
        noSource: true
      }))
      .on("error", showError)
      .pipe(gulp.dest(layout + jsDir))
      .pipe(browserSync.stream());
});

// CSS task
gulp.task('cssTask', ()=>{
  return gulp.src(src + cssFiles)
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(layout + cssDir))
        .pipe(browserSync.stream());
});

// Static Server + watching files
gulp.task('browserSyncTask', ()=>{
  browserSync.init({
    server: myRoot
  });
});

// Watch task
gulp.task('watchTask', ()=>{
  gulp.watch(sassFiles, ['sassTask']);
  gulp.watch(pugFiles, ['pugTask','pugIndexTask']);
  gulp.watch(src + cssFiles, ['cssTask']);
  gulp.watch(src + jsFiles, ['jsTask']);
  ['browserSyncTask'];
});

// Run default task
gulp.task('default', ()=>{
  return runSequence('sassTask', 'pugTask', 'cssTask', 'jsTask', 'pugIndexTask', 'browserSyncTask','watchTask');
});
