#!/usr/bin/env ts-node
class Person {
  public childs: Person[] = []
  constructor(public name: string) {

  }
  introduce(n?: number):void  {
    n = n || 1
    let prefix = '----'
    prefix = prefix.repeat(n)
    console.log(prefix+this.name)
    this.childs.forEach(item => {
      item.introduce(n+1)
    })
  }
  addChild(child: Person): void {
    this.childs.push(child)
  }
}

let grandPa = new Person('王麻子')
let ch1 = new Person('王一')
let ch2 = new Person('王二')
let ch11 = new Person('王一一')
let ch22 = new Person('王二二')
grandPa.addChild(ch1)
grandPa.addChild(ch2)
ch1.addChild(ch11)
ch2.addChild(ch22)
grandPa.introduce()