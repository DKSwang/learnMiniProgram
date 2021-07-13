// components/w-back-top/w-back-top.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    /**
   * 回到顶部
   */
  backTop(){
    wx.pageScrollTo({
      duration: 10,
      scrollTop:0
    })
  }

  }
})
