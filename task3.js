
var s,r,d,u;
var read = require('read');


read({ prompt : 'Введите первое число'}, function (err, namber) {
read({ prompt : 'Введите второе число'}, function (err, namberr) {
    process.stdin.destroy();
    
console.log('Введенное вами первое число =',namber,'Веденное вами второе число =',namberr);
    
var a = Number(namber);
      var b = Number(namberr);
    
    
s= a + b ;
 console.log('сумма=',s);
r=a-b;
 console.log('разность=',r);
d=a/b;
 console.log('деление=',d);
u=a*b;
 console.log('умножение=',u)


var max= a;

if(a>b)
{
  console.log("Число",a,"больше","числа",b);
}
else 
if(b==a)
{
  console.log("Число",a,"и число",b," являются равными")
}

else 
{
   console.log("Число",b,"больше","числа",a);}
});
})
