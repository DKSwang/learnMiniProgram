// pages/category/category.js
import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from '../../service/category.js'

Page({
  data: {
    categories: [],
    categoryData: {
    },
    currentIndex: 0
  },
  onLoad: function (options) {
    this._getData()
  },
  _getData() {
    // 1.请求分类数据
    this._getCategory()
  },
  _getCategory() {
    getCategory().then(res => {
      // 1.获取categories
      // const categories = res.data.category.list;
      const categories = [
        {
          title:'肯德基',
          maitKey:'1',
          miniWallkey:'1'
        },
        {
          title:'麦当劳',
          maitKey:'2',
          miniWallkey:'2'
        },
        {
          title:'德克士',
          maitKey:'3',
          miniWallkey:'3'
        },
        {
          title:'华莱士',
          maitKey:'4',
          miniWallkey:'4'
        },
        {
          title:'汉堡王',
          maitKey:'5',
          miniWallkey:'5'
        },
        {
          title:'瑞幸咖啡',
          maitKey:'6',
          miniWallkey:'6'
        }
      ];

      // 2.初始化每个类别的子数据
      const categoryData = {}
      for (let i = 0; i < categories.length; i++) {
        categoryData[i] = {
          subcategories: [],
          categoryDetail: []
          // categoryDetail: {
          //   'pop': [],
          //   'new': [],
          //   'sell': []
          // }
        }
      }
console.log(categories,categoryData)
      // 3.修改data中的数据
      this.setData({
      //  categories: res.data.category.list,
      categories: categories,
        categoryData: categoryData
      })

      // 4.请求第一个类别的数据
      this._getSubcategory(0)

      // 5.请求第一个类别的详情数据
      this._getCategoryDetail(0)
    })
  },
  _getSubcategory(currentIndex) {
    // 1.获取对应的maitkey
    const maitkey = this.data.categories[currentIndex].maitKey;

    // 2.请求的数据
    getSubcategory(maitkey).then(res => {
      // const tempCategoryData = this.data.categoryData;
      // tempCategoryData[currentIndex].subcategories = res.data.list;
      // this.setData({
      //   categoryData: tempCategoryData
      // })
      //假数据
      const tempCategoryData = this.data.categoryData;
      if(maitkey=='1'){
        tempCategoryData[0].subcategories = [
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'肯德基1'
          },
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'肯德基2'
          },
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'肯德基3'
          },
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'肯德基4'
          }
        ];
      }else if(maitkey=='2'){
        tempCategoryData[1].subcategories = [
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'麦当劳1'
          },
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'麦当劳2'
          },
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'麦当劳3'
          },
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'麦当劳4'
          }
        ];
      }else if(maitkey=='3'){
        tempCategoryData[2].subcategories = [
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'德克士'
          },
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'德克士'
          },
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'德克士'
          },
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'德克士'
          }
        ];
      }else if(maitkey=='4'){
        tempCategoryData[3].subcategories = [
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'华莱士'
          },
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'华莱士'
          },
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'华莱士'
          },
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'华莱士'
          }
        ];
      }else if(maitkey=='5'){
        tempCategoryData[4].subcategories = [
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'汉堡王'
          },
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'汉堡王'
          },
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'汉堡王'
          },
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'汉堡王'
          }
        ];
      }else if(maitkey=='6'){
        tempCategoryData[5].subcategories = [
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'瑞幸咖啡'
          },
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'瑞幸咖啡'
          },
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'瑞幸咖啡'
          },
          {
            image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
            title:'瑞幸咖啡'
          }
        ];
      }
     
      this.setData({
        categoryData: tempCategoryData
      })
    })
  },
  _getCategoryDetail(currentIndex) {
    // 1.获取对应的miniWallKey
    const miniWallKey = this.data.categories[currentIndex].miniWallkey;

    // 2.请求数据类别的数据
    this._getRealCategoryDetail(currentIndex, miniWallKey, 'pop');
    // this._getRealCategoryDetail(currentIndex, miniWallKey, 'new');
    // this._getRealCategoryDetail(currentIndex, miniWallKey, 'sell');
  },
  _getRealCategoryDetail(index, miniWallKey, type) {
    getCategoryDetail(miniWallKey, type).then(res => {
      // 1.获取categoryData
      const categoryData = this.data.categoryData;

      // 2.修改数据
      //categoryData[index].categoryDetail = res;
      if(miniWallKey=="1"){
        categoryData[0].categoryDetail = [
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
      }

      // 3.修改data中的数据
      this.setData({
        categoryData: categoryData
      })
    })
  },
  menuClick(e) {
    // 1.改变当前的currentIndex
    const currentIndex = e.detail.currentIndex;
    this.setData({
      currentIndex
    })

    // 2.请求对应currentIndex的数据
    this._getSubcategory(currentIndex);

    // 3.请求对应的currentIndex的详情数据
    this._getCategoryDetail(currentIndex)
  }
})