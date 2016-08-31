module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    var modRewrite = require('connect-modrewrite');

    grunt.config.init({
        watch: {
            dev: {
                files: ['app/**/*', '!app/bower_components/**/*'],
                tasks: ['dev']
            }
        },
        connect: {
            options: {
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost',
                port: 8080
            },
            livereload: {
                options: {
                    middleware: function(connect, options) {
                      return [
                          modRewrite(['^[^\\.]*$ /index.html [L]']),
                          connect.static('dist'),
                      ];
                    }
                }
            }
        },
        clean: {
            options: { force: true },
            stuff: ['dist', '.tmp']
        },
        useminPrepare: {
            html: 'app/index.html',
            options: {
                dest: 'dist'
            }
        },
        usemin: {
            html: ['dist/index.html']
        },
        copy: {
            html: {
                src: 'app/index.html', dest: 'dist/index.html'
            },
            pages: {
                expand: true, cwd: 'app/pages/', src: '**', dest: 'dist/pages/'
            },
            templates: {
                expand: true, cwd: 'app/templates/', src: '**', dest: 'dist/templates/'
            },
            bower_components: {
                expand: true, cwd: 'app/bower_components/', src: '**', dest: 'dist/bower_components/'
            },
            js: {
                expand: true, cwd: 'app/js/', src: '**', dest: 'dist/js/'
            },
            css: {
                expand: true, cwd: 'app/css/', src: '**', dest: 'dist/css/'
            }
        },
        comments: {
            css: {
                options: {
                    singleline: true,
                    multiline: true
                },
                src: ['dist/css/styles.min.css']
            },
            js: {
                options: {
                    singleline: true,
                    multiline: true
                },
                src: [
                    'dist/js/assets.min.js',
                    'dist/js/app.min.js'
                ]
            }
        }
    });

    grunt.registerTask('default', [
        'clean',
        'copy:html',
        'copy:pages',
        'copy:templates',
        'useminPrepare',
        'concat',
        'uglify',
        'cssmin',
        'usemin',
        'comments'
    ]);

    grunt.registerTask('dev', 'Compile then start a connect web server', function (target) {
        if (target === 'serve') {
            grunt.task.run(['connect:livereload']);
        }

        grunt.task.run([
            'clean',
            'copy',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'default',
        'connect:livereload:keepalive'
    ]);
};
