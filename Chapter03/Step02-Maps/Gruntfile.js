module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [ 'src/js/vendor/jquery-1.10.2.js', 'src/js/vendor/angular.js',
               'src/js/vendor/ui-utils.js', 'src/js/vendor/bootstrap.js',
               'src/js/app.js', 'src/js/controllers.js','src/js/directives.js' ],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },
    copy: {
      main: {
          files: [ { expand: true, cwd: 'src/css/', src: ['**'], dest: 'dist/css/' } ]
      }
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
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-targethtml');
  grunt.loadNpmTasks('grunt-karma');
  grunt.registerTask('dist', ['karma', 'concat', 'targethtml', 'copy']);
};
