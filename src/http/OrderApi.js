/**
 * Created by root on 17-1-6.
 */
import { tokenWithRequest } from './basicApi'

class OrderApi {
  constructor() {
    this.request = this.getRequest()
  }

  getRequest() {
    return tokenWithRequest()
  }

  getOrder(params) {
    return this.request.post(params.api, {}, {
       // headers: {
       //   'content-type': 'application/vnd.myapp.type+json'
       // }
    })
  }

  getTargetAddress(params) {
    return this.request.post(params.api, {}, {

    })
  }

  createOrderWare(params) {
    return this.request.post(params.api, {}, {

    })
  }

  getOrderAttention(params) {
    return this.request.post(params.api, {}, {

    })
  }

  getOrderInsurance(params) {
    return this.request.post(params.api, {}, {

    })
  }

  getDistribute(params) {
    return this.request.post(params.api, {}, {

    })
  }

  getOrderLogistical(params) {
    return this.request.post(params.api, {}, {

    })
  }
}

export default OrderApi
