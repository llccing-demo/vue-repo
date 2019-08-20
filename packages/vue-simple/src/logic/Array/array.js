
const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)

// 这里实现的是拦截器方法
;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(method => {
  const original = arrayProto[method]
  Object.defineProperty(arrayMethods, method, {
    // 此处为false，表示原型方法不能被枚举到
    enumerable: false,
    configurable: true,
    writable: true,
    value(...args) {
      console.log('array value行为', method, args)
      // 此处保持了数据原型的方法的原有行为，同时可以增加新的行为
      return original.apply(this, args)
    },
  })
})
