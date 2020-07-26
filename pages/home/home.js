// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:['衣服','鞋子','帽子']

  },
  //点击事件
  itemHandler(event){
    console.log(event,"点击事件")
    //想要在点击有衣服获取到衣服所对应的下表和拿到衣服这个值--通过data-传递参数
    console.log(event.target.dataset)
  },
//事件冒泡和时间捕获 capture-bind:tap="viewCapture1" bindtap="clickView1"
viewCapture1(){
  console.log("view1")
},
clickView1(){
  console.log("点击view1")
},
viewCapture2(){
  console.log("view2")
},
clickView2(){
  console.log("点击view2")
},
viewCapture3(){
  console.log("view3")
},
clickView3(){
  console.log("点击view3")
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