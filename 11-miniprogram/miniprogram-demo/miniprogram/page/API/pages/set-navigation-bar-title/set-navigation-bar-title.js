Page({
  onShareAppMessage() {
    return {
      title: '设置页面标题',
      path: 'page/API/pages/set-navigation-bar-title/set-navigation-bar-title'
    }
  },

  setNaivgationBarTitle(e) {
    const title = e.detail.value.title
    
    wx.setNavigationBarTitle({
      title,
      success() {
        
      },
      fail(err) {
        
      }
    })

    return false
  }
})
