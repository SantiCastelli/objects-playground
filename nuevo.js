const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  if (numbersAvg.length == 0){
    return null
  }
  sum = ""
  for (let index = 0; index < numbersAvg.length; index++) {
    sum = sum + numbersAvg[index]
}
  return sum 
}

console.log(averageNumbers(numbersAvg));