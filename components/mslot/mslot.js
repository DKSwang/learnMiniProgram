// components/mslot/mslot.js
Component({
  /**
   * 更多的配置项
   */
  options:{
    multipleSlots:true , //使用多插槽的时候必须用
    //styleIsolation:true,//设置样式的隔离方式
  },
  /**
   * 组件的属性列表
   * 使用者可以给组件传入数据
   */
  properties: {
    title:{
      type:String,
      value:'我是默认值',
      observer:function(newVal,oldVal){
        console.log(newVal,oldVal)
      }
    }

  },

  /**
   * 组件的初始数据
   * 定义数据的初始化
   */
  data: {
    counter:0

  },

  /**
   * 组件的方法列表
   * 定义事件函数
   */
  methods: {

  },
  /**
   * 外部传入样式
   */
  externalClasses:[],
  /**
   * 监听properties/data的数据变化
   * 当数据发生变化就会触发,但是这里没有oldVal
   */
  observers:{
    counter:function(newVal){

    }
  },
  /**
   * 组件中监听生命周期函数分为2部分
   * 1.监听所在页面的生命周期-例如这个组件被home月面展示,我们就可以监听到他的生命周期
   * 
   */
  pageLifetimes:{
    show(){
      console.log("监听组件所在页面显示出来")
    },
    hide(){
      console.log("监听组件所在页面隐藏起来")
    },
    resize(){
      console.log("监听组件所在尺寸发生变化")
    }
    },
     /**
   * 组件中监听生命周期函数分为2部分
   * 2.监听组件本身的生命周期
   */
  lifetimes:{
    created(){
      console.log("组件被创建")
    },
    attached(){
      console.log("组价被添加到页面中")
    },
    ready(){
      console.log("组件被渲染出来")
    },
    moved(){
      console.log("组件被移动到节点的另一个位置")
    },
    detached(){
      console.log("组件被移除掉")
    }
  }
})
