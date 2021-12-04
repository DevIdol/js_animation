let ball = document.querySelector('#ball')
let left = 0
let direction = 'right'
let interval = setInterval(move, 10)
function move() {
  if (direction === 'right') {
    left += 1
    if (left > 770) direction = 'left'
  } else {
    left -= 1
    if (left < 1) direction = 'right'
  }
  ball.style.left = `${left}px`
}
function start() {
  interval = setInterval(move, 10)
}
function stop() {
  clearInterval(interval)
}