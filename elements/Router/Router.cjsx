'use strict'

React                = require 'react'
ExampleApp           = require '../ExampleApp/ExampleApp.cjsx'
Router               = require '../Router/Router.cjsx'
AvatarExamples       = require '../Avatar/AvatarExamples.cjsx'
CheckboxExamples     = require '../Checkbox/CheckboxExamples.cjsx'
UploadedFileExamples = require '../UploadedFile/UploadedFileExamples.cjsx'

{ Router, Route, Link, IndexRoute, browserHistory } = require 'react-router'

component = ->
  <Router history={browserHistory}>
    <Route path="/" component={ExampleApp}>
      <IndexRoute component={AvatarExamples}/>

      <Route path="/CheckboxExamples" component={CheckboxExamples} />

      <Route path="/UploadedFileExamples" component={UploadedFileExamples} />
    </Route>
  </Router>

module.exports = component