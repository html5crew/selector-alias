module.exports = (grunt)->
    grunt.initConfig
        pkg: grunt.file.readJSON('package.json')

        jshint:
            options:
                jshintrc: '.jshintrc'
            uses_defaults: ['Gruntfile.js', 'selector-alias*.js']

        karma:
            ci:
                configFile: 'karma.conf.js'
                browsers: ['PhantomJS']
                singleRun: true

        release:
            options:
                file: 'bower.json'
                push: false
                pushTags: false
                npm: false


    grunt.loadNpmTasks 'grunt-karma'
    grunt.loadNpmTasks 'grunt-wiredep'
    grunt.loadNpmTasks 'grunt-contrib-jshint'
    grunt.loadNpmTasks 'grunt-release'

    grunt.registerTask 'default', ['jshint']
    grunt.registerTask 'test', ['default', 'karma:ci']