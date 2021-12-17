/**
 * AOS
 */
import AOS from 'aos'

AOS.init({
  startEvent: 'load',
  disable: function () {
    return window.innerWidth <= 991
  }
})

/** Set array of elements and events to refresh AOS */
const events = [
  {
    element: window,
    event: 'resize'
  },
  {
    element: window,
    event: 'lazyloaded'
  },
  {
    element: document.querySelectorAll('.nav-tabs a'),
    event: 'shown.bs.tab'
  },
  {
    element: document.querySelectorAll('.collapse'),
    event: 'shown.bs.collapse'
  }
]
/**
 * Refresh function automate refresh AOS
 * @param {object} element
 * @param {string} event
 */
const refresh = (element, event) => {
  element.addEventListener(event, () => {
    AOS.refreshHard()
  })
}

events.forEach((event) => {
  if (event.element.length > 0 && !event.element.parent) {
    /** If the listener is for nodeList */
    [...event.element].forEach((element) => {
      refresh(element, event.event)
    })
  } else if (event.element.parent) {
    /**
     * If the listener is for window
     * Above condition is prepare only for window element. If you want use document you should prepare other condition
     */
    refresh(event.element, event.event)
  }
})
