## Emblem loader for webpack

[Emblem](http://emblemjs.com/) (Emblem Templates) loader for [webpack](http://webpack.github.io/). Uses emblem's compile function to handlebars.js.

## Installation

`npm install emblem-webpack-loader ember-templates-loader`

## Usage with Ember Webpack Resolver

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
global.App = Em.Application.create({
  Resolver: require('ember-webpack-resolver?' + __dirname)({
    extensions: ['.js', '.em']
  })
});
```

### webpack config
You can also set it up the following in the webpack.config.js file
```javascript
module.exports = {
  module: {
    loaders: [
      { test: /\.em$/, loader: "ember-templates!emblem"},
    ]
  },
  resolve: {
    extensions: ['.em']
  }
}
```

## License

[MIT](http://www.opensource.org/licenses/mit-license)

