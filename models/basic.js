import {
    HTTP
}
    from '../utils/http'

class BasicModel extends HTTP {
    data = null
    getBasic() {
        return this.request({
            url: 'workshop_basic'
        })
    }
}

export {
    BasicModel
}