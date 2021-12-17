/**
 * Cookie Template Part Scripts
 */

import { setCookie, getCookie, RemoveCookie } from '../utils/cookies-manager'

const cookieWrapper = document.querySelector('.js-cookie')
const cookieDeclineButtons = document.querySelectorAll('.js-cookie-decline-button')
const cookieAcceptButton = document.querySelector('.js-cookie-accept-button')

function removeCookieVisible () {
  cookieWrapper.classList.remove('cookie--show')

  setTimeout(function () {
    cookieWrapper.classList.add('d-none')
    window.location.reload()
  }, 200)
}

document.addEventListener('DOMContentLoaded', () => {
  if (!getCookie('cookies-accepted')) {
    const cookies = document.cookie.split(';');

    [...cookies].forEach((cookie) => {
      RemoveCookie(cookie, '', '')
    })

    cookieWrapper.classList.add('cookie--show')
  }

  cookieAcceptButton.addEventListener('click', () => {
    setCookie('cookies-accepted', true, 365)

    removeCookieVisible()
  });

  [...cookieDeclineButtons].forEach((cookieDeclineButton) => {
    cookieDeclineButton.addEventListener('click', () => {
      setCookie('cookies-accepted', false, 365)

      removeCookieVisible()
    })
  })
})
