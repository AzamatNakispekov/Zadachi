var axios=require('axios')
var str=require('string');

axios.get('http://tengrinews.kz/')
     .then(function(response) {
     var currency=str(response.data).between("KZT -","<span").s;
     console.log("USD/KZT=",currency);
})
