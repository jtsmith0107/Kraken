module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './'
                }
            }
        },
        typescript: {
            web: {
                src: ['web/src/**/*.ts'],
                dest: 'web/dist/',
                options: {
                    module: 'es2015',
                    target: 'ES6',
                    sourceMap: true
                }
            },
            app: {
                src: ['app/src/**/*.ts'],
                dest: 'app/dist/',
                options: {
                    module: 'es2015',
                    target: 'ES6',
                    sourceMap: true
                }
            }
        },
        watch: {
            files: '**/*.ts',
            tasks: ['typescript']
        }
    });
 
    grunt.registerTask('default', ['connect', 'watch']);
}