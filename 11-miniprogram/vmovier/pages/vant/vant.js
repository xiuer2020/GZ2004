// pages/vant/vant.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    show: false,
    cateList: []
  },

  onChange(event) {
    // wx.showToast({
    //   title: `切换到标签 ${event.detail.name}`,
    //   icon: 'none',
    // });
  },

  routeToPostsList(e) {
    
    wx.navigateTo({
      url: '/pages/posts/posts?id='+e.currentTarget.dataset.cateid,
    })
  },

  showOverlay() {
    this.setData({
      show: true
    })
  },
  hideOverlay() {
    this.setData({
      show: false
    })
  },

  getCateList() {

    // 先去本地拿
    var cachedCateList = wx.getStorageSync('cateList')
    

    if (cachedCateList) {
      cachedCateList = JSON.parse(cachedCateList)
    }
    

    if (cachedCateList.expires > Date.now()) {
      // 还没过期
      this.setData({
        cateList: cachedCateList.data
      })
    } else {
      // 已经过期

      this.showOverlay();
      wx.request({
        url: 'https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/cate/getList',

        success: (response) => {
          // 获取成功
          
          if (response.data.data) {
            wx.setStorage({
              data: JSON.stringify({
                expires: Date.now() + 3 * 60 * 60 * 1000,
                data: response.data.data
              }),
              key: 'cateList'
            })

            this.setData({
              cateList: response.data.data
            })
          } else {
            // 网络请求正常 数据错误 降级是否通知用户

          }
        },
        fail: () => {
          // 网络请求失败 服务器挂掉

        },
        complete: () => {
          this.hideOverlay();
        }
      })
    }


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCateList()
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