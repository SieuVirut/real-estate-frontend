//const withSass = require('@zeit/next-sass')

/* eslint-disable */
//const withCss = require('@zeit/next-css')

/*if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => { }
}*/

//const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')
/*module.exports = withSass(withCss({
  webpack(config) {
    config = commonsChunkConfig(config, /\.(sass|scss|css)$/);
    return config
  }
}))*/


//const withCSS = require('@zeit/next-css')
//module.exports = withCSS()


/*const withSass = require('@zeit/next-sass')
module.exports = withCSS(withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
}))*/



/*module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  }
}*/



const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

const commonsChunkConfig = (config, test = /\.css$/) => {
    config.plugins = config.plugins.map(plugin => {
        if (
            plugin.constructor.name === 'CommonsChunkPlugin' &&
            // disable filenameTemplate checks here because they never match
            // (plugin.filenameTemplate === 'commons.js' ||
            //     plugin.filenameTemplate === 'main.js')
            // do check for minChunks though, because this has to (should?) exist
            plugin.minChunks != null
        ) {
            const defaultMinChunks = plugin.minChunks;
            plugin.minChunks = (module, count) => {
                if (module.resource && module.resource.match(test)) {
                    return true;
                }
                return defaultMinChunks(module, count);
            };
        }
        return plugin;
    });
    return config;
};


if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => { }
}

module.exports = withSass(withCSS({
    webpack: config => {
        config = commonsChunkConfig(config, /\.(sass|scss|css)$/);
        config.node = {fs: "empty"}
        return config;
    },
}));