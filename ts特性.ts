{
  //JS七种类型 + void + 枚举enum + any + nuver
  //默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
  let q:string = 'hello'
  console.log(q)
  let n: any = 1
  n = '1111'
  enum Gender {
    Man = 'man',
    Woman = 'woman'
  }

  let a: Gender = Gender.Man
  console.log(a)
  let x: string = undefined
  let e: number = undefined

  //断言  用来做类型转换， 只能从大类型转小类型
  //主观断言n2是string
  let n2: any = 123
  console.log((<string>n2).split(''))   //断言 主观的保证



  //ts类型转换  toString()， parseInt(), Boolean() 字符串和对象转换：JSON

  //解构
  let obj = {
    name: 'zhu',
    age: 18
  }
  let {name, age} = obj

  let arr = [1,2,3,4]
  let [qqq, b,c, d] = arr
}


