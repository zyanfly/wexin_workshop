// components/carousel-tap/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    carousels:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    toView:'item0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    scrollView(e){
      var index = this.getIndex(this.data.toView);
      console.log(e)
      // for(var i = 0;i<this.properties.carousels.length;i++){
        if(e.detail.deltaX<0){
          this.setData({
            toView:'item'+(index+1)
          })
        }else{
          this.setData({
            toView:'item'+(index-1)
          })
        }
      // }
      return false;
    },
    getIndex(str){
      var index = str.lastIndexOf('m');
      str = str.substring(index+1,str.length);
      return +str;
    },
    change(){
      console.log(11)
      this.setData({
        toView:'item2'
      })
    }
  }
})
