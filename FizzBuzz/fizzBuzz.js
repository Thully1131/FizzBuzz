let array = [1, 3, 4, 5]

function fizzBuzz(arr) {
    const fizzBuzzArray = []
  for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            fizzBuzzArray.push('fizzbuzz')
          } else if (arr[i] % 3 === 0) {
            fizzBuzzArray.push('fizz')
          } else if (arr[i] % 5 === 0) {
            fizzBuzzArray.push('buzz')
          } else {
            fizzBuzzArray.push(arr[i])
          }  
    }
 return fizzBuzzArray
}


// const fizzBuzz = arrOfNumbers => {
//   if (arrOfNumbers % 3 === 0) {
//     arrOfNumbers.push('fizz')
//   } else if (arrOfNumbers % 5 === 0) {
//     arrOfNumbers.push('buzz')
//   } else if (arrOfNumbers % 3 === 0 && arrOfNumbers % 5 === 0) {
//     arrOfNumbers.push('fizzbuzz')
//   } else {
//     return arrOfNumbers
//   }
// }

module.exports = fizzBuzz
