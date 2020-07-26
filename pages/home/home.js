// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //点击事件
  clickme(event){
    console.log(event)
  },
  //开始触摸
  start(){
    console.log("start")
  },
  //触摸移动
  move(){
    console.log("move")
  },
  //结束触摸
  end(event){
    console.log("end",event)
  },
  //tag和longpress只会触发一个,点击就结束了就会执行tap,长按超过350ms就会触发longpress
  tap(){
    console.log("tap")
  },
  //longpress-超过350ms
  longpress(){
     console.log("longpress")
    },
    //currentTarget和target的区别
    outHandler(event){
      console.log('外层',event)
    },
    innerHandler(event){
      console.log('内层',event)
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})