var fs = require('fs');


module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        eslint: {
            all: ['src/**/*.js']
        }
    });
    grunt.registerTask('default', ['eslint']);
};
