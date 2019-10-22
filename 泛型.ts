//用一个东西表示广泛的类型
interface hasLen {
  length: number
}
//泛型约束
function renturnIt<T extends hasLen>(n: T):T {
  console.log(n.length)
  return n
}
function create(c: {new ()}) {
  return new c()
}
function create2<T>(c: {new (): T}) {
  return new c()   //返回一个c的实例，类型是T
}
let aaa: Array<string> = ['1']
renturnIt<string>('hi')
