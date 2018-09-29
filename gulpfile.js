const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('assets/style.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'))


});
gulp.task('watch', function () {
    gulp.watch(['assets/**/*.scss'],['sass']);
});
gulp.task('default',['watch']);