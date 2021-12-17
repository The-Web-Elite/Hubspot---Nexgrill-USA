/**
 * Header Template Part Scripts
 */

import visibleElementAfterScroll from '../utils/visible-element-after-scroll'

window.addEventListener('scroll', () => {
  /** Change state for header */
  const header = document.querySelector('.js-main-header')

  visibleElementAfterScroll(header, 100, 'main-header--is-window-scrolled')
})
