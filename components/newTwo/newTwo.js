// components/newTwo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  //样式是否共享
  options:{
    //styleIsolation:'isolated' //这是默认值就是样式隔离,互不影响
    //styleIsolation:'apply-shared'//部分影响
    styleIsolation:'shared'//全部覆盖
  },

  /**
   * 组件的初始数据
   */
  data: {
    title:'我是标题-我是组件2',
    content:'我是内容'

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
