/**
 * Created by root on 17-1-5.
 */
let routeActionMixin = {
  methods: {
    goToNextPage(page, params = []) {
      let path = {
        name: page,
        params: {}
      }
      switch (page) {
        case 'userInfo':
          break
        case 'ordersManager':
          path.params = {
            type: params[0]
          }
          break
        case 'favorite':
          path.params = {
            type: params[0]
          }
          break
        case 'setting':

          break
        case 'chooseAddress':
          path.params = {
            wareId: params.wareId
          }
      }
      this.$router.push(path)
    },
  }
}

export default routeActionMixin
