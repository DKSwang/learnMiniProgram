// components/my-event/my-event.js
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
     //点击事件
  clickme(event){
    console.log(event)
    this.triggerEvent("transvent",{params:'我数参数'},{})
  },

  }
})
