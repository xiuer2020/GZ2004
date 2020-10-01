Page({
  onShareAppMessage() {
    return {
      title: 'picker',
      path: 'page/component/pages/picker/picker'
    }
  },

  data: {
    array: ['中国', '美国', '巴西', '日本'],
    index: 0,
    date: '2016-09-01',
    time: '12:01'
  },

  bindPickerChange(e) {
    
    this.setData({
      index: e.detail.value
    })
  },

  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

  bindTimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  }
})
