var gulp = require("gulp");
var concat = require('gulp-concat');

gulp.task("build-scripts", function(){
	gulp.src('./src/js/vendor/*')
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('./build/js'));

	gulp.src('./src/js/*')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./build/js'));
});

gulp.task("build-css", function(){
	gulp.src('./src/css/*')
		.pipe(concat('main.css'))
		.pipe(gulp.dest('./build/css'));

});

gulp.task('watch', function() {
  gulp.watch('./src/js/*', ['build-scripts']);
  gulp.watch('./src/css/*', ['build-css']);

});

gulp.task("default", function(){
	gulp.run("build-scripts");
	gulp.run("build-css");
});