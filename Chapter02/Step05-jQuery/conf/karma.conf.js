module.exports = function(config){
    config.set({
    basePath : '../',
    files : [
      'src/bower/angular/angular.js',
      'src/bower/angular-mocks/angular-mocks.js',
      'test/lib/angular-mocks.js',
      'src/js/vendor/bootstrap.js',
      'src/js/app.js',
      'src/js/controllers.js',
      'src/js/directives.js',
      'test/unit/**/*.js'
    ],
    autoWatch : true,
    frameworks: ['jasmine'],
    browsers : ['Chrome'],
    plugins : ['karma-chrome-launcher', 'karma-jasmine']
})};
