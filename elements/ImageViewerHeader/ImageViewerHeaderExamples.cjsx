'use strict'

ImageViewerHeader = require './ImageViewerHeader.cjsx'
React    = require 'react'

ImageViewerHeaderExamples = ->
  <div className="ImageViewerHeaderExamples">
    <h1>Image Viewer Header</h1>

    <ImageViewerHeader handle={'Batmannn'} downloadUrl={'http://google.com'} downloadAllowed={true} title={'Important Report'}/>

  </div>

module.exports = ImageViewerHeaderExamples