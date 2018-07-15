var gulp = require("gulp"),
  watch = require("gulp-watch"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssvars = require("postcss-simple-vars"),
  nested = require("postcss-nested"),
  cssImport = require("postcss-import");
  browserSync = require('browser-sync').create();

gulp.task("default", function() {
  console.log("Rijvy");
});

gulp.task("styles", function() {
  return gulp
    .src("./app/assets/styles/styles.css") //source css
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer])) //diffrent version css
    .on("error", function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles")); //destination css
});

gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

  watch("./app/index.html", function(){
    browserSync.reload();
  })

  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("cssInject");
  });
});
gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
})
