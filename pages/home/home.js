// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    httpData:{},//请求来的数据

  },
  //页面事件
  newBtn(){
    console.log ("我是页面事件")
  },

  /**
   * 生命周期函数--监听页面加载--页面被加载
   */
  onLoad: function (options) { 
    console.log('onLoad')
    //请求数据--初始话数据
    //使用箭头函数不用担心this问题
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success:(res) =>{
        console.log (res,"数据")
        this.setData({
          httpData: res
        })
        console.log (this.data.httpData,"复制数据")
      }
    })



    //不使用箭头函数,就需要进行赋值操作
    const that = this
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success:function(res){
        console.log (res,"数据")
        that.setData({
                httpData: res
              })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成--页面已经准备好但是还没有显示,仅仅是首次渲染才会执行
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示--页面已经显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏--隐藏页面是触发
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载--关闭页面时执行
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作--下拉刷新
   */
  onPullDownRefresh: function (options) {
    console.log(options,"下拉刷新")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (options) {
    console.log(options,"上拉出顶")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
    console.log(options,"我要分享")

  },
   /**
   * 监听页面滚动--获取滚动位置
   */
  onPageScroll(options){
    //console.log(options,"滚动")

  },
  /**
   * 监听页面滚动--是否到达底部
   */
  onReachBottom(options){
    console.log(options,"触底")
  },
  /**
   * 监听页面-假如页面有tabBar.在点击tabBar的时候监听的事件
   */
  onTabItemTap(options){
    console.log(options,"你在点击tabBar")
  }

})