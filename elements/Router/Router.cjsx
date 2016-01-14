'use strict'

React            = require 'react'
ExampleApp       = require '../ExampleApp/ExampleApp.cjsx'
Router           = require '../Router/Router.cjsx'
AvatarExamples   = require '../Avatar/AvatarExamples.cjsx'
CheckboxExamples = require '../Checkbox/CheckboxExamples.cjsx'

{ Router, Route, Link, IndexRoute, browserHistory } = require 'react-router'

component = ->
  <Router history={browserHistory}>
    <Route path="/" component={ExampleApp}>
      <IndexRoute component={AvatarExamples}/>

      <Route path="/Checkbox" component={CheckboxExamples} />
    </Route>
  </Router>

module.exports = component