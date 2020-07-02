// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pUrl:''

  },
  //获取相册的图片地址
  getUrl(){
    //系统api获取相册图片或者拍照
    wx.chooseImage({
     success:(res) =>{
       console.log (res)
       this.setData({
        pUrl:res.tempFilePaths[0]
       })
     }
    })
  },
  pic(events){
    console.log (events)//获取图片的相关信息
  }
})