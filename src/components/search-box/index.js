/**
 * Created by root on 16-12-14.
 */
import SearchBoxManager from './search-box-manager'
export { default as overlay } from './Overlay.vue'

export default {
  watch: {
    show(newVal) {
      if(newVal === true) {
        SearchBoxManager.open(this)
      }else if(newVal === false) {
        SearchBoxManager.close(this)
      }
    }
  }
}
