const TOKEN = "token"
App({
globalData:{
  token:'',
  name:'我的'
},
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //有限去取出缓存的token,若有就直接登录,若没有再去请求token
    const token = wx.getStorageSync(TOKEN)
    if(token && token.length !==0){
      this.checkToken(token)
      //有token只要验证token是否过期

    }else{
      //没有token,,就进行登录
     this.login()
    }
   
    
  },
  //检查token是否过期
  checkToken(token){
    console.log ("验证操作")
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:"post",
      header:{
        token
      },
      success:(res) =>{
        if(!res.data.errCode){
          //token有效就进行赋值
          this.globalData.token = token
        }else{
          //只有没有就进行请求
          this.login()
        }
      },
      fail:(error) =>{
        console.log (error)
      }
    })
  },
  //登录的方法
  login(){
    console.log ("登录操作")
    wx.login({
      //获取code值,coed值只有5分钟的有效期
      success:(res) =>{
        const code  = res.code
        console.log (res)
        //将code发送给服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method:'post',
          data:{
            code
          },
          success:(res) =>{
            //获取到了token,token全局都会使用,所以我们将他保存成全局变量
            console.log(res,"res")
            //取出token
            const token = res.data.token
            //将token赋值给全局的变量
            this.globalData.token = token
            console.log(this.globalData.token)
            //考虑到存在全局变量中,小程序退出就没有了,所以还要存在本地
            wx.setStorageSync(TOKEN, token)

          }
        })
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
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
    
  }
})
