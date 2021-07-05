export default function httpRequest(options){
return new Promise((resolve,reject) =>{
  // 写法一
  // wx.request({
  //   url: options.url,
  //   method:options.method|| "get",
  //   data:options.data||{},
  //   success:function(res){
  //     resolve(res)
  //   },
  //   fail:function(err){
  //     reject(err)
  //   }
  // })
  // 写法二
  wx.request({
    url: options.url,
    method:options.method|| "get",
    data:options.data||{},
    success:resolve,
    fail:reject
  })

})
}