function localScope()
{
    var myVariable = "I am Here!";
    console.log(myVariable);
}
localScope();
if (typeof myVariable != "undefined")
{
    console.log ('outside localScope',myVariable)

}
else{
    console.log('outside localScope UNDEFINED!!!')

}

module.exports = localScope;