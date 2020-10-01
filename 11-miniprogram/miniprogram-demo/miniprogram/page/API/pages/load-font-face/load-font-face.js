Page({
  onShareAppMessage() {
    return {
      title: '动态加载字体',
      path: 'page/API/pages/load-font-face/load-font-face'
    }
  },

  data: {
    fontFamily: 'Bitstream Vera Serif Bold',
    loaded: false,
  },

  onLoad() {
    this.setData({
      loaded: false
    })
  },

  loadFontFace() {
    const self = this
    wx.loadFontFace({
      family: this.data.fontFamily,
      source: 'url("https://sungd.github.io/Pacifico.ttf")',
      success(res) {
        
        self.setData({loaded: true})
      },
      fail(res) {
        
      },
      complete(res) {
        
      }
    })
  },

  clear() {
    this.setData({loaded: false})
  }
})
