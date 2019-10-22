//this是函数的参数
//TS 类型推断
//Soundness
function hi(name: string, age?: number, sex = 'man'): void | number {
  console.log(`Hi, ${name}`)
  return 1
}
let hi2 = function () {  // hi2 = address 100

}
//重载
function add(a: number, b: number);
function add(a: string, b: string);
function add(a, b) {
  return a + b
}
let hi3 = () => {

}
interface Human {
  name: string
}
let o = {
  name: 123,
  say(this: any) {
    console.log(this.name)
  },
  obj: {
    name: '111',
    say(this: Human) {
      console.log(this.name)
    }
  }
}
o.say()