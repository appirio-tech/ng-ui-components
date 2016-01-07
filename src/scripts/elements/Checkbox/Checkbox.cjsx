'use strict'

require './Checkbox.scss'

React    = require 'react'
Checkbox = require './Checkbox.react.jade'

Checkbox.propTypes =
  checked : React.PropTypes.bool
  label   : React.PropTypes.string
  onChange: React.PropTypes.func

module.exports = Checkbox
