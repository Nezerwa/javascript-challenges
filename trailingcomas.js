const dadFilter = (str)=>{
let newStr = str.trim().split('')
newStr = newStr.map((item, index)=>{
  if(item === ',' && newStr[index + 1] ==',') item = ''
  return item
})

if(newStr[newStr.length - 1]=== ',') newStr.pop()
return newStr.join('')
}

console.log(dadFilter("all this,,,, used to be trees,,,,,,"));