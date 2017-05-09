 // if (process.env.NODE_ENV !== 'production') require('./index.html')
 // import './styles/screen.scss'

 // const main = () => {
   // document.querySelector('h1').textContent += ''
 // }

 // document.addEventListener('DOMContentLoaded', main)

 // if (module.hot) {
   // module.hot.dispose(() => window.location.reload())
   // module.hot.accept(err => console.error(err))
// }
if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.sass'
const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

let turnMove = 0
const player = turnMove % 2 === 0 ? 'x' : 'o'

const main = () => {
  const cells = $$('td')
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', playerMove)
  }
}

const playerMove = (event) => {
  const targetCell = event.target
  if (!targetCell.dataset.player) {
    if (turnMove % 2 === 0) {
      targetCell.dataset.player = 'x'
      $('h2').textContent = `O's turn`
    } else {
      targetCell.dataset.player = 'o'
      $('h2').textContent = `X's turn`
    }
    // check if the current player won
    checkWin()
    // if current player won
    // end game

    // else
    turnMove++
  }
}

const checkWin = () => {
  for (let i = 0; i < 8; i++) {
    if (document.querySelectorAll(`.p${i}[data-player=${player}]`).length === 3) {
      true
      $('h2').textContent = `${player} Has Won`
      $$('.dialog h3').textContent = 'You won!'
      console.log('someone won')
    } else {
      $('.dialog h3').textContent = 'You lost!'
      false
    }
  }
}

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
