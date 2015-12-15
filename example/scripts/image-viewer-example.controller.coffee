'use strict'

ImageViewerExampleController = ($scope, $stateParams) ->
  vm       = this
  vm.userHandle = "batman"
  vm.userAvatar = "http://www.topcoder.com/i/m/cardiboy_big.jpg"
  vm.showNotifications = false
  vm.files = [
    {
      fileId: "abc",
      path: "work/1447877190406-e9c02ed7-00bf-4e52-8c57-4d73fec009ac/9be085da-2013-44e9-8701-507a03c6716e/Screen Shot 2015-12-01 at 1.13.17 PM.png",
      caption: "this is an image",
      url: "/images/flower.png"
    },
    {
      fileId: "def",
      path: "work/1447877190406-e9c02ed7-00bf-4e52-8c57-4d73fec009ac/cff190d6-c11e-4a42-ab32-9ea37f163334/Screen Shot 2015-12-01 at 1.13.17 PM.png",
      caption: "this is an image also",
      url: "/images/flower.png"
    },
    {
      fileId: "ghi",
      path: "work/1447877190406-e9c02ed7-00bf-4e52-8c57-4d73fec009ac/88e9df7c-96d2-482f-936d-a5dece0c67bf/Screen Shot 2015-12-01 at 1.01.35 PM.png",
      caption: "this is a different image"
      url: "/images/phone.jpg"
    },
    {
      fileId: "klm",
      path: "work/1447877190406-e9c02ed7-00bf-4e52-8c57-4d73fec009ac/fe819b7d-2534-4878-994b-35f7b2fec185/Screen Shot 2015-12-01 at 12.35.18 PM.png",
      caption: "this is another one of the images",
      url: "/images/turtles-breaking.jpg"
    }
  ]

  vm.startingFile = vm.files[1]

  activate = ->
    vm

  activate()

ImageViewerExampleController.$inject = ['$scope', '$stateParams']

angular.module('example').controller 'ImageViewerExampleController', ImageViewerExampleController