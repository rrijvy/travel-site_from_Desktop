var gulp = require('gulp'),
watch = require('gulp-watch'); 

gulp.task('default', function(){
    console.log('Rijvy');
});

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css').pipe(gulp.dest('./app/temp/styles'));
});

gulp.watch('watch',function(){
    gulp.watch('./app/assets/styles/styles.css', function(){
        gulp.start('styles');
    });    
});