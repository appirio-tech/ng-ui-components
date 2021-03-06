'use strict'

require './ImageViewerHeader.scss'

React    = require 'react'
Avatar   = require '../Avatar/Avatar.cjsx'

ImageViewerHeader = ({
  avatar
  handle
  title
  downloadUrl
  commentsAllowed
  downloadAllowed
  toggleComments
  hideUserInfo
 }) ->

  <div className="ImageViewerHeader">
    <main className="flex column light-bg">
      <div className="header flex space-between">
        <div className="user flex middle">
          {if handle && !hideUserInfo
            <a href={"https://www.topcoder.com/members/" + handle}>
              <Avatar avatar-url="{avatar}" />
            </a>
          }

          <div className="titles flex column">
            {if handle && !hideUserInfo
              <a hrf={"https://www.topcoder.com/members/" + handle}>
                <p className="name"> {handle}
                </p>
              </a>
            }

            {if handle && hideUserInfo
              <label> {handle} </label>
            }

            <p className="title">
              {title}
            </p>
          </div>
        </div>

        <div className="icons">
          {
            if downloadAllowed
              <button className="clean">
                <a href={downloadUrl}>
                  <div className="icon download"/>
                </a>
              </button>
          }

          {
            if commentsAllowed
              <button className="clean" onClick={toggleComments}>
                <div className="icon bubble"/>
              </button>
          }
        </div>
      </div>
    </main>
  </div>

module.exports = ImageViewerHeader