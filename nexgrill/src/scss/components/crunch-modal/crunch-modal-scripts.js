/**
 * Crunch Modal Template Part Scripts
 */

/** Bootstap Event Example */
document.addEventListener('DOMContentLoaded', () => {
  const modals = document.querySelectorAll('.js-modal');

  [...modals].forEach((modal) => {
    document.body.appendChild(modal)

    modal.addEventListener(
      'show.bs.modal',
      () => {
        document.querySelector('body').classList.add('lock-position')
      },
      false
    )

    modal.addEventListener(
      'hidden.bs.modal',
      () => {
        document.querySelector('body').classList.remove('lock-position')
      },
      false
    )
  })
})
