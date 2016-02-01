var gulp     = require("gulp");
var uglify   = require("gulp-uglify");
var rename   = require("gulp-rename");

gulp.task("default", function(){
    gulp.src(["./build/bundle.js"])
        .pipe(rename({suffix: ".min"}))
        .pipe(uglify())
        .pipe(gulp.dest("./build"));
});
