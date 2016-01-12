'use strict'

require './Avatar.scss'

React  = require 'react'
Avatar = require './Avatar.react.jade'

Avatar.propTypes =
  avatarUrl: React.PropTypes.string

module.exports = Avatar
