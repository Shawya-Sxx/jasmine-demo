function fib(n){//递归：Fibonacci数列 
    if (n==1) return 1; 
    if (n==0) return 0; 
    if(n>1) return fib(n-2)+fib(n-1) 
    } 
module.exports = fib