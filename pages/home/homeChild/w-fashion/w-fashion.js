// pages/home/homeChild/w-recommend/w-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[],
      observer:function(newVal,oldVal){
       // console.log (newVal,oldVal)
        const final = []
        const oldData  = JSON.parse(JSON.stringify(newVal))
         newVal.map(item =>{
          item.check = true
          final.push(item)
        })
        final.push(...oldData)
         this.data.newList = final
       //  console.log(this.data.newList)
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
  newList:[
    {
      acm: "3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
check: true,
image: "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
link: "https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
sort: 2,
title: "好物特卖1"
    },
    {
      acm: "3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
check: true,
image: "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
link: "https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
sort: 2,
title: "好物特卖2"
    },
    {
      acm: "3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
check: true,
image: "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
link: "https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
sort: 2,
title: "好物特卖3"
    },
    {
      acm: "3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
check: true,
image: "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
link: "https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
sort: 2,
title: "好物特卖4"
    },
    {
      acm: "3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
check: true,
image: "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
link: "https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
sort: 2,
title: "好物特卖5"
    },
    {
      acm: "3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
check: true,
image: "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
link: "https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
sort: 2,
title: "好物特卖6"
    },
    {
      acm: "3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
check: true,
image: "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
link: "https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
sort: 2,
title: "好物特卖7"
    },
    {
      acm: "3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
check: true,
image: "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
link: "https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
sort: 2,
title: "好物特卖8"
    }
  ],

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
