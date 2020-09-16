
module.exports = grunt => {

    // Our main configuration.
    grunt.initConfig({});


    // Sample custom tasks...
    grunt.registerTask('speak', () => {
        console.log('Speaking...');
    });

    grunt.registerTask('yell', () => {
        console.log('YELLING...');
    });

    grunt.registerTask('both', ['speak', 'yell']);
}