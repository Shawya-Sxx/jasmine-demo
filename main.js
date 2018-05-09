// const fibonacci = require('./lib/fibonacci')
//console.log("hello world");
function isLeapYear (Year) {
    if (((Year % 4)==0) && ((Year % 100)!=0) || ((Year % 400)==0)) {
    return (true);
    } else { return (false); }
    }

console.log("2015:"+isLeapYear(2015));
console.log("2000:"+isLeapYear(2000));
console.log("2008:"+isLeapYear(2008));