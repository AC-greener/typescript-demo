{
  /*

  抽象类：专门当别的类的爸爸
  也可以叫做没有写完的类,不能够实例化
  */


  let a: string = '11'
  console.log(a)
}
class Human {
  public name: string
  private _age: number  //只能自己使用
  protected sex: number  //自己和子类使用，实例不可以使用
  // get age() {
  //   return this._age
  // }
  constructor(name = '1', age = 2) {
    this.name = name
    this._age = age
  }
  move(): void {

  }
  static run() {

  }
}
Human.run()

abstract class Animal {
  eat() {

  }
  abstract makeNoise(): void
}





interface Human2 {
  name: string
  age: number
  move(): void
}
let zhu = new Human('zhuzhu', 18)
let zhu2: Human2 = { name: '1', age: 2, move(){}}