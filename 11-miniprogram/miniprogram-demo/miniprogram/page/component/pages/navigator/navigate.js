Page({
  onShareAppMessage() {
    return {
      title: 'navigatePage',
      path: 'page/component/pages/navigator/navigate'
    }
  },

  onLoad(options) {
    
    this.setData({
      title: options.title
    })
  }
})
