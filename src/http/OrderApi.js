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
      data: {
        order_id: params.orderId,
      }
    })
  }

  getOrders(params) {
    return this.request.post(params.api, {}, {
      data: {
        type: params.type,
        top_id: params.topId,
        last_id: params.lastId,
        page: params.page,
        limit: params.limit,
      }
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
      data: {
        company_id: params.companyId,
        route_id: params.route_id,
      }
    })
  }

  getOrderInsurance(params) {
    return this.request.post(params.api, {}, {

    })
  }

  getDistribute(params) {
    return this.request.post(params.api, {}, {
      data: {
        company_id: params.companyId,
        route_id: params.route_id,
      }
    })
  }

  getOrderLogistical(params) {
    return this.request.post(params.api, {}, {
      data: {
        company_id: params.companyId,
        route_id: params.route_id,
      }
    })
  }
}

export default OrderApi
