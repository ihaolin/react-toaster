var gulp = require('gulp'),
    webpack = require('gulp-webpack');

gulp.task('default', function() {
    return webpack({
            entry:{
                toast: ['./demo/demo.js', './src/main.js']
            },
            output: {
                filename: '[name].js'
            },
            module: {
                loaders: [
                    { test: /\.js$/, loader: 'babel-loader' },
                    { test: /\.css$/, loader: "style!css" }
                ]
            },
            externals: {
                'react': 'React'
            },
            resolve: {
                extensions: ['', '.js', '.jsx']
            }
        })
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
    gulp.watch(['src/*.js', 'demo/*.js', 'demo/*.css'], ['default']);
});