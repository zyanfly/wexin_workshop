import {
    LocationModel
} from '../../models/location'
import {
    CarouselModel
} from '../../models/carousel'
import {
    BasicModel
} from '../../models/basic'

const locationModel = new LocationModel()
const carouselModel = new CarouselModel()
const basicModel = new BasicModel()

Page({
    data: {
        location: null,
        carousels: null,
        basic: null,
        loadingCenter: true
    },

    onLoad: function () {
        this._loadData();
    },

    _loadData: function (callback) {
        locationModel.getLocation()
            .then(res => {
                this.setData({
                    location: res
                })
                return carouselModel.getCarousels()
            })
            .then(res => {
                this.setData({
                    carousels: res
                })
                return basicModel.getBasic()
            })
            .then(res => {
                this.setData({
                    basic: res,
                    loadingCenter: false  
                })
                callback && callback();
            }).
            catch(res => {
                console.log(res);
            })
    },
  
    makePhone: function (event) {
        wx.makePhoneCall({
            phoneNumber: this.data.basic.phone
        })
    },

    redirectAddress: function (event) {
        wx.openLocation({
            latitude: parseFloat(this.data.location.latitude),
            longitude: parseFloat(this.data.location.longitude),
            name: this.data.location.name,
            address: this.data.location.address
        })
    },

    onPullDownRefresh: function () {
        this._loadData(() => {
            wx.stopPullDownRefresh()
        });
    },

    onShareAppMessage: function () {
    }
})
