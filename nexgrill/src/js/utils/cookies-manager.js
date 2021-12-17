/**
* Setter for cookie
* @param {string} name
* @param {string} value
* @param {number} days
*/

export const setCookie = (name, value, days) => {
  const date = new Date()
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
  const expires = 'expires=' + date.toUTCString()
  document.cookie = name + '=' + value + ';' + expires + ';path=/'
}

/**
 * Get cookie value by cookie name
 * @param {string} cookieName
 */
export const getCookie = (cookieName) => {
  const name = cookieName + '='
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

/**
* Setter for cookie
* @param {string} name
* @param {string} value
* @param {number} days
*/
export const RemoveCookie = (name, value, days) => {
  const date = new Date()
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
  const expires = 'expires=Thu, 01 Jan 1970 00:00:01 GMT'
  document.cookie = name + '=' + value + ';' + expires + ';path=/'
}
