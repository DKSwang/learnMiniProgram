// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'这是我要的数据',
    age:'18',
    students:[
      {name:'小明',age:'18'},
      {name:'小红',age:'19'},
      {name:'小花',age:'20'},
      {name:'小开',age:'21'},
      {name:'小贵',age:'10'},
    ],
    counter:0

  },
  addNum(){
    this.setData({
      counter:this.data.counter+1
    })
    console.log('点击了加法按钮')
  },
  downNum(){
    this.setData({
      counter:this.data.counter-1
    })
    console.log('点击了减法按钮')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('我是1',options)//差昂在这里进行网络请求
    // wx.getUserInfo({
    //   success:function(res){
    //     console.log (res,"成功回调")

    //   }
    // })

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