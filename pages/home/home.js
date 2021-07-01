// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:true
   

  },
  //切换显示
  showPage(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  
  changeNum(){
    //获取组件对象
    let change_num = this.selectAllComponents(".comIn")
    console.log (change_num,"change_num")
    //修改自定义组件中的num变量-可以实现但是不推荐,推荐使用组件内部暴露的方法进行修改
    // change_num[0].setData({
    //   num:change_num[0].data.num+10
    // })


    //通内部暴露方法进行修改
    change_num[0].myNum(5)
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