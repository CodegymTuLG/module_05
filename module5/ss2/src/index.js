// @ts-ignore
function fibonacci(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
for (var i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}
console.log('Tổng các số fibonacci là ' + fibonacci(10));
