const { override, addPostcssPlugins } = require('customize-cra');
const purgecss = require('@fullhuman/postcss-purgecss')({

        // Specify the paths to all of the template files in your project
        content: [
                './src/**/*.html',
                './src/**/*.vue',
                './src/**/*.jsx',
                './src/**/*.js',
                // etc.
        ],
        css: ['./src/**/*.css'],

        // Include any special characters you're using in this regular expression
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});
console.log(`config-overrides.js, env: ${process.env.NODE_ENV}`);
module.exports = override(
    addPostcssPlugins([
        require('postcss-import'),
        require('tailwindcss')('./tailwind.config.js'),
        require('postcss-nested'),
        require('postcss-custom-properties'),
        require('autoprefixer'),
            ...process.env.NODE_ENV === 'production'
                ? [purgecss]
                : []
    ])
);
