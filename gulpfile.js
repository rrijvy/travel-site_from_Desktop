var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested') ;


gulp.task('default', function(){
    console.log('Rijvy');
});

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css') //source css
    .pipe(postcss([cssvars, nested, autoprefixer])) //diffrent version css
    .pipe(gulp.dest('./app/temp/styles')); //destination css
});

gulp.task('watch',function(){
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });    
});