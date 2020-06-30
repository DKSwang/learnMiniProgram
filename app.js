App({
  //生命周期函数
  onLaunch:function(res){ //小程序初始化完成时执行
    console.log ("app开始加载")
    //获取用户信息--异步调用
    wx.getUserInfo({
      success:function(res){
        console.log(res,"000")
      }
    })
    //模拟程序发生错误--让onError函数执行
    setTimeout(()=>{
      let a = new Error();
      throw a
    })
  },
  onShow:function(options){ //小程序界面显示出来会显示
    console.log('页面显示完成')

  },
  onHide:function(){
    console.log("界面被隐藏时执行")

  },
  onError:function(msg){
    console.log("程序执行发生错误时执行")
  }
})