Page({
  onShareAppMessage() {
    return {
      title: 'redirectPage',
      path: 'page/component/pages/navigator/redirect'
    }
  },

  onLoad(options) {
    
    this.setData({
      title: options.title
    })
  }
})
