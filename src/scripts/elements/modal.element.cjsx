React    = require 'react'
ReactDOM = require 'react-dom'

element =
  render: ->
    return React.DOM.noscript()

module.exports = React.createClass element