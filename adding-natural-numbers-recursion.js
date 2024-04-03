function addNums(num){
  if(num === 1) return 1;
  return num + addNums(num - 1)
}
addNums(5) // 15
