var number = 0;

for(var i = 2; i < process.argv.length; i++)
{
  number = number + +process.argv[i];
}
console.log(Number(number));