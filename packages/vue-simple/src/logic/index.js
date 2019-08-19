function defineReactive(data, key, val) {
  let dep = []
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      dep.push(window.target)
      console.log('getter', val)
      return val
    },
    set: function(newVal) {
      if (val === newVal) {
        return
      }
      console.log('setter', newVal)
      val = newVal
    },
  })
}

let obj = { a: 123, b: `I'm new user`};

Object.keys(obj).forEach(key => {
  defineReactive(obj, key, obj[key])
})

obj.a = 1255
console.log(obj.b)