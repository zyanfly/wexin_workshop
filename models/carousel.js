import {
    HTTP
}
from '../utils/http'

class CarouselModel extends HTTP {
    data = null
    getCarousels() {
        return this.request({
            url: 'carousels'
        })
    }
    getCarousel() {
        return this.request({
            url: 'first_carousel'
        })
    }
}

export {
    CarouselModel
}