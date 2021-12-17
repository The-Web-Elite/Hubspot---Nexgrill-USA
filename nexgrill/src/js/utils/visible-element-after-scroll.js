/**
 * Toggle class after offsetY on element
 * @param {DOMElement} element
 * @param {Number} offsetY
 * @param {String} className
 */
export default (element, offsetY, className) => {
  if (window.pageYOffset >= offsetY) {
    element.classList.add(className)
  } else {
    element.classList.remove(className)
  }
}
