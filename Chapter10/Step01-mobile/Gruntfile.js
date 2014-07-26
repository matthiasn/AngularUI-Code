module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            'dist/*'
          ]
        }]
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, cwd: 'src/views/', src: ['**'], dest: 'dist/views/' }
        ]
      }
    },
    cssmin: {
      dist: {
        files: {
          'dist/css/style.css': [
            'src/bower_components/bootstrap/dist/css/bootstrap.css',
            'src/css/style.css'
          ]
        }
      }
    },
    concat: {
      options: { separator: ';' },
      dist: {
        src: [
          'src/bower_components/modernizr/modernizr.js',
          'src/bower_components/jquery/dist/jquery.js',
          'src/bower_components/angular/angular.js',
          'src/bower_components/angular-route/angular-route.js',
          'src/bower_components/angular-touch/angular-touch.js',
          'src/bower_components/angular-animate/angular-animate.js',
          'src/bower_components/bootstrap/dist/js/bootstrap.js',
          'src/js/app.js',
          'src/js/controllers.js',
          'src/js/services.js'
        ],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'dist/js/',
          src: '*.js',
          dest: 'dist/js'
        }]
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/js/<%= pkg.name %>.js': [
            'dist/js/<%= pkg.name %>.js'
          ]
        }
      }
    },
    targethtml: {
      dist: {
        files: {
          'dist/index.html': 'src/index.html'
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeCommentsFromCDATA: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['index.html'],
          dest: 'dist'
        }, {
          expand: true,
          cwd: 'dist/views',
          src: ['bookmarks.html'],
          dest: 'dist/views'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ngmin');
  grunt.loadNpmTasks('grunt-targethtml');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('dist', ['clean', 'copy', 'concat', 'cssmin', 'ngmin', 'uglify', 'targethtml', 'htmlmin']);
};
