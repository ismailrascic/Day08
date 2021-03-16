var myGlobalVariable = 10;
function function1()
{
 notGlobalVariable = 5;

}
function function2()
{
  var result = "";
   
  if ( typeof myGlobalVariable != "undefinded")
  { result += "myGlobalVariable:" + myGlobalVariable;}
  
  if ( typeof notGlobalVariable != "undefinded")
  { result += "notGlobalVariable:" + notGlobalVariable;}
   console.log(result);

}
function1();
function2();
module.exports = 
{
function1,
function2

}; 