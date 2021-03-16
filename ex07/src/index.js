var sum = 0;
function addThree()
{
    sum = sum + 3;
    console.log(sum);
}
function addFive()
{
    sum = sum + 5;
    console.log(sum);
}

addThree();
addFive();

module.exports =
{
addThree,
addFive
};
