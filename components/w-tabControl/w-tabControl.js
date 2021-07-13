// components/w-tabControl/w-tabConreol.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[],
      observer:function(newVal,oldVal){
       // console.log(newVal,oldVal)
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeColor(e){
      //console.log (e)
      //将被获取的index赋值给currentIndex
      this.setData({
        currentIndex:e.currentTarget.dataset.index
      })
      //通知父组件我点击的是哪一个
      this.triggerEvent("clickTab",{index:this.data.currentIndex})
      //根据不同的index值来请求你数据
      
    }

  }
})
