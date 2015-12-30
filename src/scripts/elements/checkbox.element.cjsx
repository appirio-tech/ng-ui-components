'use strict'

React      = require 'react'
ReactDOM   = require 'react-dom'
classNames = require 'classnames'

element =
  propTypes:
    checked : React.PropTypes.bool
    label   : React.PropTypes.string
    onChange: React.PropTypes.func

  getInitialState: ->
    checked: this.props.checked
    label: this.props.label

  handleClick: ->
    this.setState
      checked: !this.state.checked
      label: this.state.label

    this.props.onChange? !this.state.checked

  render: ->
    btnClass = classNames
      'clean': true
      'checked': this.state.checked

    iconClass = classNames
      'icon'            : true
      'plus hollow'     : !this.state.checked
      'checkmark active': this.state.checked

    if this.state.label
      labelElement = <label onClick={this.handleClick}>{ this.state.label }</label>

    <div className="flex middle">
      <button className={btnClass} type="button" onClick={this.handleClick}>
        <div className={iconClass} />
      </button>

      { labelElement }
    </div>

module.exports = React.createClass element
