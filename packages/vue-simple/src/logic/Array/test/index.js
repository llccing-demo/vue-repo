import { arrayMethods } from '../array'

let arr = [1, 2]
let arrb = []

// 覆盖原型方法
arr.__proto__ = arrayMethods
console.log(arr)
console.log(arrb)

arr.push(4, 3, 7, 6, 5)
arr.unshift(8)
arr.splice(0, 1)
arr.pop()
arr.shift()
arr.sort(function(a, b) {
  return a - b
})

arr.reverse()

console.log('arr=', arr)
console.log(arr[2])
