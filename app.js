App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log(options) //这俩个地方租判断度可以
    //获取用户信息,且将其传递给后台
    wx.getUserInfo({
      success:(res)=>{
        console.log(res)
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow,可能会执行多次
   */
  onShow: function (options) {
    console.log(options) //会有scene这个字段对应的码值参数
                         // https://developers.weixin.qq.com/miniprogram/dev/reference/scene-list.html
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  //全局数据
  globalData:{
    name:'青山',
    age:89
  }
})
