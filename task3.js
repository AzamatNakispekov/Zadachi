
var s,r,d,u;
var read = require('read');


read({ prompt : 'Введите первое число'}, function (err, namber) {
  read({ prompt : 'Введите второе число'}, function (err, namberr) {
    console.log(namber, namberr);
    process.stdin.destroy();


s=namber+namberr;
console.log('сумма=',s);
r=namber-namberr;
console.log('разность=',r);
d=namber/namberr;
console.log('деление=',d);
u=namber*namberr;
console.log('умножение=',u)


var max= namber;

if(namber>namberr)
{

    console.log("Число",namber,"больше","числа",namberr);
}
else 
if(namberr==namber){

    console.log("Число",namber,"и число",namberr," являются равными")

}

else {
console.log("Число",namberr,"больше","числа",namber);}
  });
})
