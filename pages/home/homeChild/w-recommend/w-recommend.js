// pages/home/homeChild/w-recommend/w-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[],
      observer:function(newVal,oldVal){
       // console.log (newVal,oldVal)
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    isload:false

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleImage(){
      if(!this.data.isload){
        this.data.isload=true
        this.triggerEvent("imageLoad")
      }
      
    }

  }
})
