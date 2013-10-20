module.exports = function(config){
    config.set({
    basePath : '../',
    files : [
      'app/js/vendor/angular.js',
      'test/lib/angular-mocks.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],
    autoWatch : true,
    frameworks: ['jasmine'],
    browsers : ['Chrome', 'Firefox'],
    plugins : ['karma-chrome-launcher', 'karma-firefox-launcher', 'karma-jasmine']
})};