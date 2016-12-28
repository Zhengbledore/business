/**
 * Created by root on 16-12-14.
 */
export const demo = () => {

}

let zIndex = 10000
export const getZIndex = () => zIndex++

export const getDOM = function(dom) {
  if(dom.nodeTypes === 3){
    dom = dom.nextElementSibling || dom.nextSibling
    getDOM(dom)
  }
  return dom
}

/*  */
