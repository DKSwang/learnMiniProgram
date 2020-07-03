// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newVal:'input的绑定数据'

  },
  //获取绑定值
  getInputVal(val){
    console.log(val,"监控输入的值,只要输入就会触发")
  },
  //获取焦点
  oneHandler(){
    console.log('获取焦点')
  },
  //失去焦点
  twoHandler(){
    console.log('失去焦点')
  }
})