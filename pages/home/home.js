// pages/home/home.js
import {getMultiData,getProduct} from "../../service/home"
 //规定一个滚动距离
 const TOPDISTANCE = "30"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],
    recommendList:[],
    tabList:["流行","新款","精选"],
    tabIndex:'0',
    //产品数据
    goods:{
      pop:{page:0,list:[]},
      new:{page:0,list:[]},
      sell:{page:0,list:[]}
    },
    currentType :"pop", //默认是流行 
    showTop:false

  },
  clickTab(params){
   // console.log(params,"00")
   const index = params.detail.index
    this.setData({
      tabIndex:index
    })
    //切换type值
    switch (index) {
      case 0:
        this.setData({
          currentType:'pop'
        })
        break;
      case 1:
        this.setData({
          currentType:'new'
        })
        break;
      case 2:
          this.setData({
            currentType:'sell'
          })
          break;        
      default:
        break;
    }
    this.getProductData(this.data.currentType)
    
    
  },
  //请求产品数据
  getProductData(type){
    //处理页码
    const pages = this.data.goods[type].page+1
    getProduct(type,pages).then(res =>{
     // console.log(res,type)
      //取出数据
      //  const list = res.data.data.list
      // //近数据处理
      // const oldList = this.data.goods[type].list
      // oldList .push(...list)
      // const typeKey = `goods.${type}.list` //处理list的Key
      // const pageKey = `goods.${type}.page`
      // this.setData({
      //   [typeKey]:oldList,  //新的赋值方式
      //   [pageKey]:page
      // })
      //假数据赋值
      let list = []
      if(type=='pop'){
        //console.log("pop")
       list = [
          {
            title:'pop数据1',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:1001,
            collect:801
          },
          {
            title:'pop数据2',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:1002,
            collect:802
          },{
            title:'pop数据3',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:1003,
            collect:803
          },{
            title:'pop数据4',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:1004,
            collect:804
          }
        ]
      }else if(type=='new'){
        //console.log("new")
        list = [
          {
            title:'new数据1',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:2001,
            collect:201
          },
          {
            title:'new数据2',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:2002,
            collect:202
          },{
            title:'new数据3',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:2003,
            collect:203
          },{
            title:'new数据4',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:2004,
            collect:204
          },
          {
            title:'new数据1',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:2001,
            collect:201
          },
          {
            title:'new数据2',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:2002,
            collect:202
          },{
            title:'new数据3',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:2003,
            collect:203
          },{
            title:'new数据4',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:2004,
            collect:204
          },
          {
            title:'new数据1',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:2001,
            collect:201
          },
          {
            title:'new数据2',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:2002,
            collect:202
          },{
            title:'new数据3',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:2003,
            collect:203
          },{
            title:'new数据4',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:2004,
            collect:204
          }
        ]
      }else{
       // console.log("sell")
        list = [
          {
            title:'sell数据1',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:3001,
            collect:301
          },
          {
            title:'sell数据2',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:3002,
            collect:302
          },{
            title:'sell数据3',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:3003,
            collect:303
          },{
            title:'sell数据4',
            img:'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
            price:3004,
            collect:304 
          }
        ]
      }
      //console.log(this.data.goods[this.data.currentType].list,"9090")
      let oldList = []
      oldList .push(...list)
      const typeKey = `goods.${type}.list` //处理list的Key
      const pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]:oldList,  //新的赋值方式
        [pageKey]:pages
      })
      
      
    })
    .catch(err =>{
      console.log(err)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求轮播图数据和推荐数据
    getMultiData().then(res =>{
      const banner = res.data.data.banner.list
      const comment = res.data.data.recommend.list
      this.setData({
        bannerList:banner,
        recommendList:comment
      })
    })
    .catch(err =>{
      console.log(err)
    })
    //请求产品数据
    this.getProductData(this.data.currentType)
   


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
    console.log("已经滚动到蝶客")
    //上下加载更多数据
    this.getProductData(this.data.currentType)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 监听页面滚动
   */
  onPageScroll(option){
   // console.log(option)
    const scrollTop = option.scrollTop
    // 官方建议不要在滚动回电函数中频繁的条用setData
    const flag = scrollTop>=TOPDISTANCE
    if (flag !=this.data.showTop){
      this.setData({
        showTop:flag
      })
    }
    
  }
})