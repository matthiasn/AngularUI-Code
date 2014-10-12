module.exports = function (config) {
    config.set({
        basePath: '../',
        files: [
            'src/bower_components/angular/angular.js',
            'src/bower_components/angular-ui-utils/ui-utils.js',
            'src/bower_components/angular-ui-map/ui-map.js',
            'src/bower_components/angular-mocks/angular-mocks.js',
            'src/js/app.js',
            'src/js/controllers.js',
            'test/unit/**/*.js'
        ],
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        plugins: ['karma-chrome-launcher', 'karma-jasmine']
    })
};
