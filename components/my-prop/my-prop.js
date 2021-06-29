// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     //写法一:
    // title:String, 
    // content:String,
    //写法二:
    title:{
      type:String,
      value:'我是默认的标题',
      observer:function(newval,oldVal){
        console.log(newval,oldVal)
      }
    },
    content:{
      type:String,
      value:'我是默认的内容',
      observer:function(newval,oldVal){
        console.log(newval,oldVal)
      }
    },
    
  },
  //传递样式
    externalClasses:['titleclass'],

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
