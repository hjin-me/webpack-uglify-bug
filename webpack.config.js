module.exports = function makeWebpackConfig() {
    let config = {};
    config.resolve = {
        extensions: ['.js', '.jsx', '.json']
    };

    config.entry = {
        main: './src/uglify.js'
    };

    config.externals = {};

    config.plugins = [];
    config.mode = 'production';

    return config;
}();
