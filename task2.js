var mass = [17,6,15,8,2,20];
var i;
var res=0;

console.log('массив')

    console.log( mass );

console.log('массив с вычисленной разницей')
for(i=0;i<= mass.length ;i++) 
{
res=(mass[i+1]-mass[i]);
    console.log(res);
}