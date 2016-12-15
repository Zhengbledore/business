/**
 * Created by root on 16-12-14.
 */
import Vue from 'vue'
import overlay from './Overlay.vue'
import { getZIndex, getDOM } from '../../tool/utils'

const Overlay = Vue.extend(overlay)

const SearchBoxManager = {
  instances: [],
  overlay: false,
  open(instance) {
    this.instances.push(instance)
    this.showOverlay()
    const dom = getDOM(instance.$el)
    dom.style.zIndex = getZIndex()
  },
  close(instance) {
    this.closeOverlay()
  },
  showOverlay() {
    let overlay = this.overlay = new Overlay({
      el: document.createElement('div')
    })
    document.body.appendChild(overlay.$el)
  },
  closeOverlay() {
    if(!this.overlay) return
    const overlay = this.overlay
    this.overlay = null
    overlay.$el.remove()
  }
}

export default SearchBoxManager
