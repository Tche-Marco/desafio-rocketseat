const buttonStartGif = document.querySelector('#start_gif')
const buttonEndGif = document.querySelector('#end_gif')
const couchImg = document.querySelector('#couch_img')
const couchGif = document.querySelector('#couch_gif')

function startGif() {
  buttonStartGif.classList.toggle('hide')
  buttonEndGif.classList.toggle('show')
  couchImg.classList.toggle('hide')
  couchGif.classList.toggle('show')
}
function endGif() {
  buttonStartGif.classList.toggle('hide')
  buttonEndGif.classList.toggle('show')
  couchImg.classList.toggle('hide')
  couchGif.classList.toggle('show')
}

buttonStartGif.addEventListener('click', () => {
  startGif()
})

buttonEndGif.addEventListener('click', () => {
  endGif()
})
