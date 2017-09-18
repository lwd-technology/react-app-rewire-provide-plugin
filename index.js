const webpack = require('webpack')

/**
 * @param {object} config
 * @param {any[]} config.plugins
 */
function rewireProvidePlugin(config, env, providePluginOptions = {}) {
  // Add the provide plugin to the list of plugins
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin(providePluginOptions)
  ])

  return config
}

module.exports = rewireProvidePlugin
