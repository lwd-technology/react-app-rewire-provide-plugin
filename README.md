# react-app-rewire-provide-plugin

Add `webpack.ProvidePlugin` to a [`react-app-rewired`](https://github.com/timarney/react-app-rewired) config.

```js
const rewireProvidePlugin = require('react-app-rewire-provide-plugin')

// Use `webpack.ProvidePlugin` to add jQuery globally
config = rewireProvidePlugin(config, env, {
  'window.jQuery': 'jquery'
})
```
