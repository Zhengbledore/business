/**
 * Created by root on 17-1-20.
 */
import { noneTokenWithRequest } from './basicApi'

class SearchApi {
  constructor() {
    this.request = this.getRequest()
  }

  getRequest() {
    return noneTokenWithRequest()
  }

  /* most relate route */
  simpleSearch(params) {
    return this.request.post(params.api, {}, {
      data: {
        query: params.query
      }
    })
  }

  /*  */
  search(params) {
    return this.request.post(params.api, {}, {
      data: {
        query: params.query,
        top_id: params.topId,
        last_id: params.lastId,
        page: params.page,
        limit: params.limit,
        sort: params.sort,
      }
    })
  }

}

export default SearchApi
