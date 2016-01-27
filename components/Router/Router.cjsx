'use strict'

React             = require 'react'
ExampleApp        = require '../ExampleApp/ExampleApp.cjsx'
Router            = require '../Router/Router.cjsx'
AvatarExamples    = require '../Avatar/AvatarExamples.cjsx'
CheckboxExamples  = require '../Checkbox/CheckboxExamples.cjsx'
ImageViewerHeader = require '../ImageViewerHeader/ImageViewerHeaderExamples.cjsx'
ImageViewer       = require '../ImageViewer/ImageViewerExamples.cjsx'
Loader            = require '../Loader/LoaderExamples.cjsx'

{ Router, Route, Link, IndexRoute, browserHistory } = require 'react-router'

component = ->
  <Router history={browserHistory}>
    <Route path="/" component={ExampleApp}>
      <IndexRoute component={AvatarExamples}/>

      <Route path="/CheckboxExamples" component={CheckboxExamples} />

      <Route path="/ImageViewerHeader" component={ImageViewerHeader} />

      <Route path="/ImageViewer" component={ImageViewer} />

      <Route path="/Loader" component={Loader} />

    </Route>
  </Router>

module.exports = component