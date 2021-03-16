var total = 0;
function funcWithArg(digit)
{
 total=(digit + 9) / 5;

}
total = funcWithArg()
funcWithArg(6);
console.log(total);
module.exports = funcWithArg;