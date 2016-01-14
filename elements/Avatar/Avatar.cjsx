'use strict'

require './Avatar.scss'

React  = require 'react'

Avatar = ({avatarUrl}) ->
  src = avatarUrl || require './place-holder.svg'

  <div className="Avatar">
    <img className="avatar" src={src}/>
  </div>

Avatar.propTypes =
  avatarUrl: React.PropTypes.string

module.exports = Avatar
