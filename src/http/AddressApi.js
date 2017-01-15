/**
 * Created by root on 17-1-15.
 */
import { tokenWithRequest } from './basicApi'

class AddressApi {
  constructor() {
    this.request = this.getRequest()
  }

  getRequest() {
    return tokenWithRequest()
  }

  getAddresses(params) {
    return this.request.post(params.api, {}, {

    })
  }
}

export default AddressApi
