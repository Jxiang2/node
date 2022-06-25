/**
 * Buffer initialization
 * Buffer is a type, like an array
 * Buffer elements are reperesented by hexidecimal numbers
 */

// create buffer of 10 bits, all cleared
const b1 = Buffer.alloc(5)
console.log(b1)

// create  buffer, some garbage may still not cleared
const b2 = Buffer.allocUnsafe(10)
console.log(b2)

// create a buffer based on our input
const b3 = Buffer.from('中', 'utf-8')
console.log(b3)

const b4 = Buffer.from([0xe4, 0xb8, 0xad], 'utf-8')
console.log(b4)
console.log(b4.toString())

// Buffer.from(x) create another buffer, and copy the content of x
const b5 = Buffer.alloc(3)
const b6 = Buffer.from(b5)
b5[0] = 1
console.log(b5)
console.log(b6)


console.log('####################################')


/**
 * Buffer methods
 * fill, write, toString, slice, indexOf, copy
 * Buffers' sizes are fixed once inited
 */

// fill the buffer repeatedly until full, with offset, end availabe
let a1 = Buffer.alloc(6)
a1.fill('123', 1, 4) // range [1, 4)
console.log(a1)
console.log(a1.toString())

// write, will override the previous occupied spaces 
a1.write('321', 1, 3) // startpoint, length
console.log(a1)
console.log(a1.toString())

// slice
const a2 = Buffer.from('hello world')
let a3 = a2.slice(6, 12) // startpoint, endpoint
console.log(a3)
console.log(a3.toString())

// copy, from a5 to a4
const target = Buffer.alloc(6)
const source = Buffer.from('你好')
source.copy(target, 3, 3) // startpoint of a5, startpoint of a4
console.log(target)
console.log(source)





