Page({
  onShareAppMessage() {
    return {
      title: '设置',
      path: 'page/API/pages/setting/setting'
    }
  },

  data: {
    setting: {}
  },

  getSetting() {
    wx.getSetting({
      success: (res) => {
        
        this.setData({setting: res.authSetting})
      }
    })
  }
})
