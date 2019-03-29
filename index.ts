#!/usr/bin/env ts-node
var a:number = parseInt(process.argv[2])
var b:number = parseInt(process.argv[3])

if(Number.isNaN(a) || Number.isNaN(b)) {
  console.log("出错啦")
  process.exit(1)
}
console.log(a + b)
process.exit(0)

