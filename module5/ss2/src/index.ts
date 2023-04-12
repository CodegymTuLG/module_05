// @ts-ignore
function fibonacci(n: number) {
  if (n == 0 || n == 1) {
    return 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i))
}
console.log('Tổng các số fibonacci là ' + fibonacci(10))

// run by
// node src/index.js
