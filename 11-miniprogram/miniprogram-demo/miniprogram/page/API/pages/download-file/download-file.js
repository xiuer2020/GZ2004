const downloadExampleUrl = require('../../../../config').downloadExampleUrl

Page({
  onShareAppMessage() {
    return {
      title: '下载文件',
      path: 'page/API/pages/download-file/download-file'
    }
  },

  downloadImage() {
    const self = this

    wx.downloadFile({
      url: downloadExampleUrl,
      success(res) {
        

        self.setData({
          imageSrc: res.tempFilePath
        })
      },
      fail({errMsg}) {
        
      }
    })
  }
})
