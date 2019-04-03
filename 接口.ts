//接口就是用代码描述一个对象必须有什么属性（包括方法），但是有没有其他属性就不管了。
//函数和方法的区别：当一个函数是一个对象的属性时，我们把这个函数称为这个对象的方法
{

  interface Shape {
    body: number,
    [propName: string]: number
  }
  interface Animal {
    move(): void
  }
  interface Houzi {
    run(): void
  }
  interface Person extends Animal, Houzi {
    readonly name: string
    game?: Array<string>
    shape: Shape
    say(word: string):void 
  }
  let x: Person = {
    name: 'zhangsan',
    say():void {},
    shape: {body: 1},
    move() {},
    run() {}
  }
  console.log(x)
  interface Add {
    (a: number, b:number): number
  }
  let a: Add = function(a:number, b:number):number {
    return a+b
  }
  // 接口的继承
}

{
  interface InterfaceA {
    num: number
    b: boolean
    str: string
    optional?: string
    add(n1: number, n2:number):number
    readonly r:string
  }
}