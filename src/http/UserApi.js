/**
 * Created by root on 17-1-20.
 */
import { tokenWithRequest, noneTokenWithRequest } from './basicApi'

class UserApi {
  constructor() {
    this.request = this.getRequest()
    this.requestWithOutToken = noneTokenWithRequest()
  }

  getRequest() {
    return tokenWithRequest()
  }

  getWeChatUrl(params) {
    return this.requestWithOutToken.post(params.api, {}, {
    })
  }

  weChatAuth(params) {
    return this.requestWithOutToken.post(params.api, {}, {
      data: {
        code: params.weChatCode,
        redirect_uri: params.redirectUri,
      }
    })
  }

  factoryChat(params) {
    return this.request.post(params.api, {}, {
      data: {
      }
    })
  }
}

export default UserApi
