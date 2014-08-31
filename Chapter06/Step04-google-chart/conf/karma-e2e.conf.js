module.exports = function(config){
    config.set({
    basePath : '../',
    files : [
        'test/e2e/**/*.js'
    ],
    autoWatch : false,
    browsers : ['Chrome'],
    frameworks: ['ng-scenario'],
    singleRun : true,
    proxies : {
      '/': 'http://localhost:8000/'
    },
    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-ng-scenario'    
            ]
    })
};