module.exports = function(config){
    config.set({
    basePath : '../',
    files : [
      'src/js/vendor/jquery-1.10.2.js',
      'src/js/vendor/angular.js',
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
