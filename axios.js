var axios=require('axios')

axios.get('http://habrahabr.kz/')
.then(function (response){
    var str = response.data;
    //console.log(str);
    s1=str.indexOf("<h1 class=\"topic-title\">");
    s2=str.indexOf("</h1>");
    console.log(s1 , s2);
    data=str.slice(s1 , s2);
 
console.log(data);})

//console.log(str.indexOf("<H1>"));
//console.log(str.indexOf("</H1>"));

//s1=str.indexOf("<H1>"+4) ;
//s2=str.indexOf("</H1>");

//str=str.slice(s1 , s2)
//console.log(str);