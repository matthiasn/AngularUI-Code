module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/bower/angular/angular.js','src/js/*.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },
    copy: {
      main: {
        src: 'src/css/main.css',
        dest: 'dist/css/main.css',
      },
    },
    targethtml: {
      dist: {
        files: {
          'dist/index.html': 'src/index.html'
        }
      }
    },
    karma: {
      unit: {
        configFile: 'conf/karma.conf.js',
        singleRun: true
      }
    },
    protractor: {
      e2e: {
        options: {
          configFile: 'conf/protractor.conf.js'
        } 
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-targethtml');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.registerTask('dist', ['karma', 'protractor', 'concat', 'targethtml', 'copy']);
};