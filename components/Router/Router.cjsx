'use strict'

React                = require 'react'
ExampleApp           = require '../ExampleApp/ExampleApp.cjsx'
Router               = require '../Router/Router.cjsx'
AvatarExamples       = require '../Avatar/AvatarExamples.cjsx'
CheckboxExamples     = require '../Checkbox/CheckboxExamples.cjsx'
ImageViewerHeader    = require '../ImageViewerHeader/ImageViewerHeaderExamples.cjsx'

{ Router, Route, Link, IndexRoute, browserHistory } = require 'react-router'

component = ->
  <Router history={browserHistory}>
    <Route path="/" component={ExampleApp}>
      <IndexRoute component={AvatarExamples}/>

      <Route path="/CheckboxExamples" component={CheckboxExamples} />

      <Route path="/ImageViewerHeader" component={ImageViewerHeader} />

    </Route>
  </Router>

module.exports = component