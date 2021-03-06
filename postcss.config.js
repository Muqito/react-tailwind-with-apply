console.log(`postcss.config.js, env: ${process.env.NODE_ENV}`);
module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss')('./tailwind.config.js'),
        require('postcss-nested'),
        require('postcss-custom-properties'),
        require('autoprefixer'),
    ],
};
