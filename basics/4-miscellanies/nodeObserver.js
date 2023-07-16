const EventEmitter = require('events')

const celebrity = new EventEmitter()

// listener1 ...
const listener1 = (result) => {
  result === 'win' && console.log('Congrats')
  result === 'lose' && console.log(':(')
}

// listner2 ...
const listener2 = (result) => {
  result === 'win' && console.log(':(')
  result === 'lose' && console.log('You lose!')
}

// listener1 subscribe the event race that emitted by celebrity
celebrity.on('race', listener1)
// listener2 subscribe the event race that emitted by celebrity
celebrity.on('race', listener2)

const num = Math.random()
num > 0.5 ? celebrity.emit('race', 'win') : celebrity.emit('race', 'lose')


