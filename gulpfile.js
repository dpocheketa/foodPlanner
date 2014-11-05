var gulp = require("gulp");
var concat = require('gulp-concat');
// var watch = require('gulp-watch');

gulp.task("build-scripts", function(){
	gulp.src('./src/js/vendor/*')
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('./build/js'));

	gulp.src('./src/js/*')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function() {
  gulp.watch('./src/js/*', ['build-scripts']);

});

gulp.task("default", function(){
	console.log("it works mf");
});