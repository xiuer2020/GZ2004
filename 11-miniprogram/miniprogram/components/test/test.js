// components/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    parentToChildMsg: {
      type: String,
      value: 'default value',
    },
    propA: {
      type: String,
      value: 'default value',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function () {
      // 
      this.triggerEvent('customEvent',{name:'nick'})
    }
  }
})
