// components/helloworld/helloworld.js

var myBehavior = require('../my-behavior')


Component({
  /**
   * 组件的属性列表
   */
  behaviors: [myBehavior],

  attached: function () {
    this.setData({
      numberA: 1,
      numberB: 2,
    })
  },

  // 数据监听器
  observers: {
    'numberA, numberB': function (numberA, numberB) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        sum: numberA + numberB
      })
    },
    'searchText': function (searchText) {
      
    }
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    searchText: '00'
  },



  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function () {
      this.setData({
        numberA: this.data.numberA + 1
      })
    }
  }
})