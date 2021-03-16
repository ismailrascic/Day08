function mathTest(x, y){
if (x < 0 || y < 0)
{
return undefined;
}


return Math.round(Math.pow(Math.sqrt(x) + Math.sqrt(y), 2));
}


console.log(2,2);
console.log(2,2);
console.log(-2,2);
console.log(2,-2);
console.log(2,8);
console.log(3,3);
console.log(0,0);

mathTest(1, 2);

module.exports = mathTest;


