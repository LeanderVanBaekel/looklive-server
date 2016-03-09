'use strict';

var gulp            = require('gulp');
var $               = require('gulp-load-plugins')();

var config = {

    build: './public/build/',
    dist: './dist/',
    base: './public/build/',
    taskPath: './gulp/tasks/',
    
    html: {
        watch: ['src/html/**/*.html'],
        src: ['./src/html/**/*.html', '!./src/html/includes/**']
    },
    
    css: {
        watch: ['public/sass/**/*.scss'],
        src: ['./public/sass/main.scss'],
        folder: 'css/',
        destFile: 'styles.min.css'
    },
    
    js: {
        watch: ['public/js/**/*.js'],
        src: ['./public/js/**/*.js'],
        folder: 'js/',
        destFile: 'scripts.min.js'
    },
    
    images: {
        watch: ['public/images/**'],
        src: ['./public/images/**'],
        folder: '/images/'
    },

    fonts: {
        watch: ['public/fonts/**'],
        src: ['./public/fonts/**'],
        folder: '/fonts/'
    },
    
    misc: {
        src: [
            '*.ico'
        ]
    },

    error: function(error) {
        $.util.beep();
        $.notify.onError({
            title: 'Gulp',
            message: 'Error: <%= error.message %>'
        })(error);
        this.emit('end');
    }

};

module.exports = config;


