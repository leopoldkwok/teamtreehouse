module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'main.css': 'main.scss',
                }
            }
        },
        scsslint: {
            allFiles: [
            'main.scss',
            ],
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-scss-lint');

    grunt.registerTask('default', ['scsslint', 'sass']);

};