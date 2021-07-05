// pages/home/home.js
import HTTPRequest from "../utils/httpRequest.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**  下面是原生的请求方式 */
    //页面加载完成就可以请求数据
    wx:wx.request({
    //   //最基本的get请求  url:'http://123.207.32.32:8000/home/data?type=sell&page=1',
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success: (result) => {
    //     console.log(result)
    //   },
    //   fail: (res) => {},
    //   complete: (res) => {},
    // })

    //get请求,但是带参数的2中写法  
  //    url: 'http://123.207.32.32:8000/home/data?type=sell&page=1',
  //    success: (result) => {
  //      console.log(result)
  //    },
  //    fail: (res) => {},
  //    complete: (res) => {},
  //  })
  // 第二种写法:
  //    url: 'http://123.207.32.32:8000/home/data',
  //    data:{
  //      type:"sell",
  //      page:1
  //    },
  //    success: (result) => {
  //      console.log(result)
  //    },
  //    fail: (res) => {},
  //    complete: (res) => {},
  //  })
  //post请求并且携带参数
  // url: 'http://httpbin.org/post',
  //    data:{
  //      name:"sell",
  //      age:1
  //    },
  //    method:'post',
  //    success: (result) => {
  //      console.log(result)
  //    },
  //    fail: (res) => {},
  //    complete: (res) => {
  //      console.log (res)
  //    },
   })
   /**  下面是封装以后的请求调用 */
   HTTPRequest({
    url: 'http://httpbin.org/post',
    method:'post',
   })
   .then(res =>{
     console.log(res,"拿到的数据")
   }) 
   .catch(err =>{
     console.log(err,"返回的错误信息")
   })

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