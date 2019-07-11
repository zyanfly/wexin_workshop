// components/carousel-tap/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        carousels: {
            type: Array
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        toView: 'item0'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        viewImage(e) {
            let arr = [];
            for (let item of this.properties.carousels) {
                arr.push(item.pic)
            }
            var src = e.currentTarget.dataset.src;
            wx.previewImage({
                current: src,
                urls: arr
            })
        }
    }
})