const button = document.querySelector('.modal-btn')
const modal = document.querySelector('.modal__wrapper')
const body = document.querySelector('body')
const menu = document.querySelector('.header__menu')

const toggleModal = (e) => {
  e.preventDefault()

  if (e.target.closest('.modal-btn')) {
    modal.classList.toggle('active')
    body.classList.add('active')
  }

  if (e.target === modal) {
    modal.classList.remove('active')
    body.classList.remove('active')
  }

  if(menu.classList.contains('active')) {
    body.classList.add('active')
  }
}

document.addEventListener('click', toggleModal)