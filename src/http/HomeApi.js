/**
 * Created by root on 17-1-20.
 */
import { tokenWithRequest } from './basicApi'

class HomeApi {
  constructor() {
    this.request = this.getRequest()
  }

  getRequest() {
    return tokenWithRequest()
  }

  // getTargetAddresses(params) {
  //   return this.request.post(params.api, {}, {
  //
  //   })
  // }
}

export default HomeApi
