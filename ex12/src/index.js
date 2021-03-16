function randomInteger()
{
   return Math.floor(Math.random() * 30) ;
}

console.log(randomInteger());
randomInteger();
module.exports = randomInteger;