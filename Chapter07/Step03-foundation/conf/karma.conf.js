module.exports = function (config) {
    config.set({
        basePath: '../',
        files: [
            'src/bower_components/jquery/jquery.js',
            'src/bower_components/angular/angular.js',
            'src/bower_components/angular-mocks/angular-mocks.js',
            'src/js/app.js',
            'src/js/controllers.js',
            'src/js/filters.js',
            'test/unit/**/*.js'
        ],
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        plugins: ['karma-chrome-launcher', 'karma-jasmine']
    })
};
