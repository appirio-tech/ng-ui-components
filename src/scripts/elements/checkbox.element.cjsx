'use strict'

React      = require 'react'
classNames = require 'classnames'

Checkbox = ({ checked, label, onChange }) ->
  btnClass = classNames
    'clean': true
    'checked': checked

  iconClass = classNames
    'icon'            : true
    'plus hollow'     : !checked
    'checkmark active': checked

  if label
    labelElement = <label onClick={onChange}>{ label }</label>

  <div className="flex middle">
    <button className={btnClass} type="button" onClick={onChange}>
      <div className={iconClass} />
    </button>

    { labelElement }
  </div>

Checkbox.propTypes =
  checked : React.PropTypes.bool
  label   : React.PropTypes.string
  onChange: React.PropTypes.func

module.exports = Checkbox
