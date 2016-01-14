'use strict'

Checkbox = require './Checkbox.cjsx'
React    = require 'react'

CheckboxExamples = ->
  <div className="CheckboxExamples">
    <h1>Checked is false and no label</h1>

    <Checkbox checked={false} />

    <h1>Checked is true with label</h1>

    <Checkbox checked={true} label="show me the money" />

  </div>

module.exports = CheckboxExamples
