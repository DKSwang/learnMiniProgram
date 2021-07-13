// components/w-goods-item/w-goods-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object,
      value:{},
      observer:function(newVal,oldVal){
        console.log(newVal,oldVal,"0000000")
      }
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

  }
})
