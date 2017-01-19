/**
 * Created by root on 17-1-20.
 */
/* company route */
import { noneTokenWithRequest } from './basicApi'

class CompanyApi {
  constructor() {
    this.request = this.getRequest()
  }

  getRequest() {
    return noneTokenWithRequest()
  }

  /* company info */
  getCompany(params) {
    return this.request.post(params.api, {}, {
      data: {
        company_id: params.companyId
      }
    })
  }

  /* route info */
  getRoute(params) {
    return this.request.post(params.api, {}, {
      data: {
        company_id: params.companyId,
        route_id: params.routeId
      }
    })
  }

  /* routes */
  getRoutes(params) {
    return this.request.post(params.api, {}, {
      data: {
        company_id: params.companyId,
        top_id: params.topId,
        last_id: params.lastId,
        page: params.page,
        limit: params.limit,
        sort: params.sort,

        // sort: {
        //   mostRelation: '',
        //   price: 'desc'
        // }
      }
    })
  }
}

export default CompanyApi
