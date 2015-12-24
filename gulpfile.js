var gulp = require("gulp");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var browserify = require("browserify");
var scss = require("gulp-sass");
var jsx = require("gulp-jsx");
var globby = require("globby");

var inputPaths = {
    css: ["./src/scss/*.scss"],
    jsx: ["./src/js/react/*.jsx"]
};

// must be strings (not arrays) if you are using them as gulp destinations
var outputPaths = {
    css: "./public/stylesheets",
    js: "./public/javascripts"
};

gulp.task('css', function() {
    gulp.src(inputPaths.css)
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest(outputPaths.css));
});

gulp.task('css:watch', function() {
    gulp.watch(inputPaths.css, ['css']);
});

gulp.task('jsx', function() {
    // need to glob files before applying browserify/babelify
    globby(inputPaths.jsx).then(function(entries) {
        browserify({entries: entries})
            .transform("babelify", {presets: ["es2015", "react"]})
            .bundle()
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe(gulp.dest(outputPaths.js));
    });
});

gulp.task('jsx:watch', function() {
    gulp.watch(inputPaths.jsx, ['jsx']);
});

// recompile jsx and css, then watch for any new changes
gulp.task('default', ['jsx', 'jsx:watch', 'css', 'css:watch']);
gulp.task('compile', ['jsx', 'css']);
