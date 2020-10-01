Page({
  onShareAppMessage() {
    return {
      title: '振动',
      path: 'page/API/pages/vibrate/vibrate'
    }
  },

  vibrateShort() {
    wx.vibrateShort({
      success(res) {
        
      },
      fail(err) {
        console.error(err)
      },
      complete() {
        
      }
    })
  },

  vibrateLong() {
    wx.vibrateLong({
      success(res) {
        
      },
      fail(err) {
        console.error(err)
      },
      complete() {
        
      }
    })
  }
})
