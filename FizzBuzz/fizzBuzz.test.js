const fizzBuzz = require('./fizzBuzz')

test('returns `fizz` if element is divisible by 3', () => {
  expect(fizzBuzz([1, 2, 3])).toEqual([1, 2, 'fizz'])
})

test('returns `buzz` if element is divisible by 5', () => {
  expect(fizzBuzz([4, 5, 2])).toEqual([4, 'buzz', 2 ])
})

// introduce more relevant `test` cases
test('returns `fizzbuzz` if element is divisible by 3 and 5', () => {
  expect(fizzBuzz([14, 15, 16])).toEqual([14, 'fizzbuzz', 16])
})

test( 'returns `fizzbuzz` or `buzz` or `fizz` if element is divisible by 3 and 5,3 respectively ', () =>{
  expect(fizzBuzz([20, 27, 45, 7, 8, 10])).toEqual(['buzz', 'fizz', 'fizzbuzz', 7, 8, 'buzz'])
})
