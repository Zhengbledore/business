/**
 * Created by root on 16-12-15.
 */
// const baseUrl = 'http://api.business.dev'
const baseUrl = 'localhost'
const searchUrl = '/search'
const factoryShipment = '/factory/shipments'
const orders = '/orders'
const getOrder = '/getOrder/get'
const cancelOrderOperate = '/getOrder/operate/cancel'
const editOrderOperate = '/getOrder/operate/edit'
const confirmOrderOperate = '/getOrder/operate/confirm'
const cancelOrder = '/getOrder/cancel'
const editOrder = '/getOrder/edit'

/* getOrder preparing */
const createOrderWare = '/getOrder/ware/create'
const getDefaultAddress = '/getOrder/address/get'
const getOrderAttention = '/getOrder/attention/get'
const getOrderInsurance = '/getOrder/insurance/get'
const getDistribute = '/distribute/get'
const getOrderLogistical = '/order/logistical/get'

export {
  baseUrl,
  searchUrl,
  factoryShipment,
  orders,
  getOrder,
  cancelOrderOperate,
  editOrderOperate,
  confirmOrderOperate,
  cancelOrder,
  editOrder,
  createOrderWare,
  getDefaultAddress,
  getOrderAttention,
  getOrderInsurance,
  getDistribute,
  getOrderLogistical,
}
