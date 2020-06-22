// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: 'hello',
    array: [11, 22, 33, 44, 55],
    show: true,
    duration: 234,
  },

  clickHandler: function (e) {
    
  },

  // 这里的方法 wxml里面调不到 要写在 wxs里面
  // xxx: function (n) {
  //   return n+1
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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