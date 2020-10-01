// 增加 getApp 和 getCurrentPages 方法，分别用来获取 App 实例和当前页面栈。
var app = getApp()
var currentPages = getCurrentPages()




// pages/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: "0",
    latitude: "0",
    value: '',
    suggests: [],
    canClick: true,
    msg: null
  },
  searchInputHandler: function (e) {
    if (!this.data.canClick) {
      return
    }
    this.setData({
      canClick: false
    })
    // 
    wx.request({
      url: 'https://api.kele8.cn/agent/https://suggest.taobao.com/sug?code=utf-8&q=' + e.detail.value,
      enableCache: true,
      success: (res) => {
        // 
        this.setData({
          suggests: res.data.result
        })
      }
    })
    setTimeout(() => {
      this.setData({
        canClick: true
      })
    }, 500);
  },
  tapHandle: function () {
    // 
    wx.scanCode({
      success: (res) => {
        
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.msg) {
      this.setData({
        msg: app.globalData.msg
      })
    }
    // app.globalData.msg = "xxxxxxxxx"
    // 

    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})