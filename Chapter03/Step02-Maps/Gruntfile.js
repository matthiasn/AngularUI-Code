module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: { separator: ';' },
      dist: {
        src: [ 'src/bower_components/jquery/jquery.js',
               'src/bower_components/angular/angular.js',
               'src/bower_components/angular-ui-utils/ui-utils.js',
               'src/bower_components/angular-ui-map/ui-map.js',
               'src/js/app.js', 
               'src/js/controllers.js'],
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
        files: { 'dist/index.html': 'src/index.html' }
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
  grunt.registerTask('dist', ['concat', 'targethtml', 'copy']);
};
