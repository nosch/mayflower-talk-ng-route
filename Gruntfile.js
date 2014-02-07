/**
 * ng-scaffold
 * Grunt task runner configuration.
 */
module.exports = function (grunt) {
    'use strict';

    // load all required Grunt plugins listed in package.json
    require('load-grunt-tasks')(grunt);

    // display the elapsed execution time of all tasks
    require('time-grunt')(grunt);

    // Task configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Project paths
        project: {
            sourceDir: 'src/',
            testDir: 'test/',
            bowerDir: 'bower_components/',
            buildRoot: 'build/',
            tmpDir: 'build/.tmp/',
            assetDir: 'build/.tmp/asset/',
            concatDir: 'build/.tmp/concat/',
            htmlDir: 'build/.tmp/html/',
            distDir: 'build/dist/'
        },

        clean: {
            tmp: ['<%= project.tmpDir %>'],
            fonts: ['<%= project.sourceDir %>asset/fonts/']
        },

        useminPrepare: {
            html: '<%= project.sourceDir %>index.html',
            options: {
                staging: '<%= project.tmpDir %>',
                dest: '<%= project.distDir %>'
            }
        },

        usemin: {
            html: '<%= project.htmlDir %>index.html'
        },

        ngmin: {
            app: {
                src: ['<%= project.concatDir %>js/app.js'],
                dest: '<%= project.concatDir %>js/app.js'
            }
        },

        html2js: {
            app: {
                options: {
                    module: 'template.app',
                    useStrict: true,
                    quoteChar: '\'',
                    indentString: '    ',
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                },
                src: ['<%= project.sourceDir %>app/**/*.tpl.html'],
                dest: '<%= project.sourceDir %>app/module/template/template.js'
            }
        },

        copy: {
            fonts: {
                // Bower fonts
                cwd: '<%= project.bowerDir %>bootstrap/dist/',
                src : ['fonts/*.*'],
                dest: '<%= project.sourceDir %>asset/',
                expand: true
            },
            tmp: {
                files: [{
                    // HTML index
                    cwd: '<%= project.sourceDir %>',
                    src: ['index.html'],
                    dest: '<%= project.htmlDir %>',
                    expand: true
                }, {
                    // Assets (fonts, img, ico)
                    cwd: '<%= project.sourceDir %>',
                    src : ['asset/**/*.*'],
                    dest: '<%= project.tmpDir %>',
                    expand: true
                }]
            },

            dist: {
                files: [{
                    // HTML index and templates
                    cwd: '<%= project.htmlDir %>',
                    src : ['index.html'],
                    dest: '<%= project.distDir %>',
                    expand: true
                }, {
                    // Fonts and images
                    cwd: '<%= project.assetDir %>',
                    src : ['**'],
                    dest: '<%= project.distDir %>',
                    expand: true
                }]
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: [
                    '<%= project.concatDir %>**/vendor.js'
                ]
            },
            default: [
                '<%= project.sourceDir %>**/*.js',
                '<%= project.testDir %>**/*.spec.js',
                '<%= project.testDir %>**/*.scenario.js',
                '<%= project.testDir %>**/*.conf.js',
                'Gruntfile.js'
            ]
        },

        karma: {
            default: {
                configFile: 'test/config/karma.unit.conf.js',
                browsers: ['PhantomJS']
            },
            unit: {
                configFile: 'test/config/karma.unit.conf.js'
            }
        },

        connect: {
            options: {
                hostname: 'localhost',
                port: 8080
            },
            default: {
                options: {
                    base: '<%= project.distDir %>',
                    open: true,
                    middleware: function (connect, options) {
                        return [
                            require('connect-livereload')(),
                            connect.static(options.base)
                        ];
                    }
                }
            }
        },

        watch: {
            default: {
                options: {
                    livereload: true
                },
                files: [
                    '<%= project.sourceDir %>index.html',
                    '<%= project.sourceDir %>app/**/*.tpl.html',
                    '<%= project.sourceDir %>css/*.css',
                    '<%= project.sourceDir %>**/*.js',
                    'Gruntfile.js'
                ],
                tasks: [
                    'build'
                ]
            }
        }
    });

    // Task registration
    grunt.registerTask('default', ['server']);

    grunt.registerTask('prepare', [
        'clean',
        'copy:fonts',
        'html2js',
        'useminPrepare',
        'copy:tmp',
        'concat'
    ]);

    grunt.registerTask('build', [
        'prepare',
        'jshint',
        'karma:default',
        'ngmin',
        'uglify',
        'cssmin',
        'usemin',
        'copy:dist',
        'clean:fonts'
    ]);

    grunt.registerTask('server', [
        'build',
        'connect',
        'watch'
    ]);

    grunt.registerTask('release', [
        'build',
        'karma:unit',
        'clean:tmp'
    ]);
};
