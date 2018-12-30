let mix = require('laravel-mix');
let build = require('./tasks/build.js');
require("laravel-mix-purgecss");

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/build');
mix.webpackConfig({
  plugins: [
    build.jigsaw,
    build.browserSync(),
    build.watch(['source/**/*.md', 'source/**/*.php', 'source/**/*.scss', '!source/**/_tmp/*']),
  ]
});

mix
  .postCss('source/_assets/css/app.css', 'css')
  .options({
    postCss: [
      require('postcss-easy-import')(),
      require('tailwindcss')('./tailwind.js'),
    ],
    processCssUrls: false,
  })
  .purgeCss({
    extensions: ['html', 'md', 'php'],
    folders: ['source'],
  })
  .version()
  .sourceMaps()
