const { src, dest, series, watch } = require ('gulp');
let sass = require('gulp-sass');
sass.compiler = require ('node-sass');
let source = {
    sass: 'src/sass/**/*.s[a|c]ss',
    css: 'src/site/_includes/assets/css',
};

let styles = () => {
    return src(source.sass)
        .pipe(sass({outputStyle: "expanded" }).on('error', sass.logError))
        .pipe(dest(source.css))
};

let watchSass = (done) => {
    watch(source.sass, styles);
    done;
}

exports.style = styles;
exports.watch = watchSass;
exports.default = series(styles, watchSass);
