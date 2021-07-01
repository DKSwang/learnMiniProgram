// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:Array,
      value:["标题1","标题2","标题3"],
      observer:function(newVal,oldVal){
        console.log(newVal,oldVal)
      }
    }

  },
  

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0

  },
  //样式
  externalClasses:['titleColorChange'],

  /**
   * 组件的方法列表
   */
  methods: {
    changeColor(event){
      this.setData({
        currentIndex:event.currentTarget.dataset.index
      })
      this.triggerEvent("transvent",{index:this.data.currentIndex,name:this.properties.title[this.data.currentIndex]},{})
      console.log (event,"9999")
    },

  }
})
