import gulp from 'gulp';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import through2 from 'through2';
import babelify from 'babelify';
import browserify from 'browserify';


const SRC = {
    MAIN: './lib/index.js'
};

const DEST = {
    MAIN: './dist'
};

gulp.task('compile', () => {
    return gulp.src(SRC.MAIN)
        .pipe(through2.obj((file, enc, next) => {
            browserify(file.path, { debug: true })
                .transform(babelify)
                .bundle(function(err, res) {
                    if(err) { return next(err) }

                    file.contents = res;
                    next(null, file);
                });
        }))
        .on('error', function(error) {
            console.log(error.stack);
            this.emit('end');
        })
        .pipe(rename('vasimr.js'))
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(gulp.dest(DEST.MAIN))
        .pipe(uglify())
        .pipe(rename('vasimr.min.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(DEST.MAIN))
});

gulp.task('watch', () => gulp.watch(['./lib/**/*.js'], ['compile']));

gulp.task('default', ['compile', 'watch']);