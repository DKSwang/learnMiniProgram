// pages/home/home.js
import {getMultiData,getProduct} from "../../service/home"
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
    currentType :"pop" //默认是流行 

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
      console.log(res,type)
      //取出数据
      const list = res.data.data.list
      //近数据处理
      const oldList = this.data.goods[type].list
      oldList .push(...list)
      const typeKey = `goods.${type}.list` //处理list的Key
      const pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]:oldList,  //新的赋值方式
        [pageKey]:page
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})