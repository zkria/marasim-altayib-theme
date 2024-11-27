const mix = require('laravel-mix');

mix.js('src/assets/js/app.js', 'public/js')
   .sass('src/assets/styles/app.scss', 'public/css')
   .options({
      processCssUrls: false,
      postCss: [
         require('autoprefixer')
      ]
   })
   .sourceMaps(false, 'source-map')
   .version(); 