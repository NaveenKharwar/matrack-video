let mix = require('laravel-mix');

mix.js('src/js/script.js', 'dist/js/')
    .sass('src/scss/style.scss', 'dist/css/')
    .options({
        processCssUrls: false
    })
    .copy('src/assets/**/*', 'dist/assets', false)
    .copy('node_modules/bootstrap/dist/js/bootstrap.min.js', 'dist/js', false)
    .copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'dist/webfonts')
    .disableNotifications();
