module.exports = function(config){
    config.set({
    basePath : '../',
    files : [
      'src/bower_components/jquery/jquery.js',
      'src/bower_components/angular/angular.js',
      'test/lib/angular-mocks.js',
      'src/js/app.js',
      'src/js/controllers.js',
      'test/unit/**/*.js'
    ],
    autoWatch : true,
    frameworks: ['jasmine'],
    browsers : ['Chrome'],
    plugins : ['karma-chrome-launcher', 'karma-jasmine']
})};
