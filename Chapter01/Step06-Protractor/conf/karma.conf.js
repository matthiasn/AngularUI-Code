module.exports = function(config){
    config.set({
    basePath : '../',
    files : [
      'src/bower/angular/angular.js',
      'src/bower/angular-mocks/angular-mocks.js',
      'src/js/**/*.js',
      'test/unit/**/*.js'
    ],
    autoWatch : true,
    frameworks: ['jasmine'],
    browsers : ['Chrome', 'Firefox'],
    plugins : ['karma-chrome-launcher', 'karma-firefox-launcher', 'karma-jasmine']
})};