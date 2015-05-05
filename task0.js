t=10;
h=200;


function Con(th){
    
  b=th*10/36;
  return b;}


function fall(t){

   x=(g*(t*t))/2;
   return x;}


function speed(t){
  
    x1=g*t;
    return x1;}


function high(h){

    t=Math.sqrt(2*h/g);
    return t;}

function fall2(h){

    f=Math.sqrt(2*g*h);
    return f;} 





function allinPlanets(planetsName,g){ 
var i1=fall(t)
    console.log("Какое расстояние пролетит за 20 секунд=",i1.toFixed(1),"м");

 var i2=speed(t)
     console.log("Какая скорость по прошествии 20 секунд=",i2.toFixed(1),"м/c","или",Con(speed(i2)).toFixed(1),"км.ч");

 var i3=high(h)
     console.log("Сколько длится свободное падение с высоты 200м=", i3.toFixed(1),"c");  
    
 var i4=fall2(h)
     console.log("Какова скорость после падения с высоты 200м=",i4.toFixed(1),"м/c","или",Con(fall2(i4)).toFixed(1),"км/ч");
}
 allinPlanets("Zemlia",g=9.8)

 allinPlanets("Mars",g=3.71)

 
 


