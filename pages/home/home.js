// pages/home/home.js
Page({
  //展示弹框
  showToast(){
    wx.showToast({
      title: '失败',
      icon: 'loading',
      duration: 2000,
      mask:true,
     // image:"../../pages/hh,imh" 可以是图片
     success:function(){
       console.log("展示成功")
     },
     fail:function(){
       console.log("展示失败")
     },
     complete:function(){
       console.log("展示完成")
     }
    })
    
  },
  //展示弹窗
  showmodal(){
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // }) 
  },
  //展示选项
  showChoose(){
    //展示选项
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      itemColor:'red',
      success (res) {
        console.log(res.tapIndex,"展示选择的那个")
      },
      fail (res) {
        console.log(res.errMsg,"点击取消显示")
      }
    })
  },
  //展示loading
  showLoading(){
    wx.showLoading({
      title: '加载中',
      mask:true,
      success:function(res){
        console.log(res,"成功了")
      },
      fail:function(error){
        console.log(error,"错误了")
      },
      complete:function(res){
        console.log(res,"完成了")
      }
    })
    
    setTimeout(function () {
      wx.hideLoading()  //让loading消失
    }, 2000)
    

  },
  /**
   * 页面的初始数据
   */
  data: {

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