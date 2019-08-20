import Observer from '../Observer'
import Watcher from '../Watcher'

let obj = { a: 'asdfadf', b: `I'm new user` }

// 给属性设置get set
new Observer(obj)


// 监听变化
new Watcher(obj, 'a', function(newVal, old) {
  console.log('watcher callback newVal', newVal)
  console.log('watcher callback old', old)
})

// 复制新值时，会触发 callback
obj.a = 123123;


// 未监听的，没有 callback
obj.b = 123;
