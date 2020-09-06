const { src, dest, series, parallel, watch } = require ('gulp');
let sass = require('gulp-sass');
sass.compiler = require ('node-sass');
let concat = require('gulp-concat');

let source = {
    sass: 'src/sass/**/*.s[a|c]ss',
    js: 'src/js/**/*.js',
}

let destination = {
    css: 'src/site/_includes/assets/css',
    js: 'src/site/_includes/assets/js'
}

let styles = () => {
    return src(source.sass)
        .pipe(sass({outputStyle: "expanded" }).on('error', sass.logError))
        .pipe(dest(destination.css));
}

let scripts = () => {
    return src(source.js)
        .pipe(concat('main.js', {newLine: ''}))
        .pipe(dest(destination.js));
}

let watchFiles = (done) => {
    watch(source.sass, styles);
    watch(source.js, scripts);
    done;
}

exports.style = styles;
exports.scripts = scripts;
exports.watch = watchFiles;
exports.default = series(parallel(styles, scripts), watchFiles);
