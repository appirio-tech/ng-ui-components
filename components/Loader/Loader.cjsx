'use strict'

require './Loader.scss'

React = require 'react'

Loader = ->
  <div className="Loader">
    <div className="container">
      <div className="loader"/>
    </div>
  </div>

module.exports = Loader
