'use strict'

Avatar = require './Avatar.cjsx'
React  = require 'react'

AvatarExamples = ->
  <div className="AvatarExamples">
    <h1>No url is provided</h1>

    <Avatar />

    <h1>Url is provided</h1>

    <Avatar avatarUrl="http://www.topcoder.com/i/m/cardiboy_big.jpg" />
  </div>

module.exports = AvatarExamples
