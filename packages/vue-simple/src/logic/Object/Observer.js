import Dep from './Dep'
import { arrayMethods } from '../Array/array'

const hasProto = '__proto__' in {}
const arrayKeys = Object.keys(arrayMethods)

export default class Observer{
  constructor(value) {
    this.value = value

    if (Array.isArray(value)) {
      const augment = hasProto? protoAugment: copyAugment
      augment(value, arrayMethods, arrayKeys)
    } else {
      this.walk(value)
    }
  }

  walk(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i], obj[keys[i]])
    }
  }
}

function defineReactive(data, key, val) { 
  if (typeof val === 'object') {
    new Observer(val)
  }

  let dep = new Dep()
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      dep.depend()
      return val
    },
    set(newVal) {
      if (newVal === val) return
      val = newVal
      dep.notify()
    }
  })
}

function protoAugment(target, src, keys) {
  target.__proto__ = src
}

function copyAugment(target, src, keys) { 
  for (let i = 0; i < keys.length; i++){
    const key = keys[i];
    def(target, key, src[key])
  }
}

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    enumerable: !!enumerable,
    configurable: true,
    writable: true,
    value: val
  })
}