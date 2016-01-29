'use strict'

require './Checkbox.scss'

React     = require 'react'
PropTypes = React.PropTypes

Checkbox = ({onChange, checked, label}) ->
  if checked
    iconClassName = 'icon checkmark active'
  else
    iconClassName = 'icon plus hollow'

  <div className="Checkbox flex middle">
    <button className="clean" type="button" onClick={onChange}>
      <div className={iconClassName} />
    </button>

    {
      if label
        <label onClick={onChange}>{label}</label>
    }
  </div>

Checkbox.propTypes =
  checked: PropTypes.bool
  label: PropTypes.string

module.exports = Checkbox
