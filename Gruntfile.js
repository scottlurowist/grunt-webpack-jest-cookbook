
module.exports = grunt => {

    // Our main configuration.
    grunt.initConfig({
        run: {
            options: {
              // Task-specific options go here.
            },
            test: {
              cmd: 'npm',
              args: [
                'test'
              ]
            }
        }           
    });


    // Sample custom tasks...
    grunt.registerTask('speak', () => {
        console.log('Speaking...');
    });

    grunt.registerTask('yell', () => {
        console.log('YELLING...');
    });

    grunt.registerTask('both', ['speak', 'yell']);

    // Load our plugins...
    grunt.loadNpmTasks('grunt-run');

    // Register our NPM script in package.json so that we can invoke
    // the NPM script from Grunt.
    grunt.registerTask('test', ['run:test:cmd'])   
}