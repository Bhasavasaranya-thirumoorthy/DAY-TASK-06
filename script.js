//XML-HTTP request(XHR)
//They are used to interact with server via API

//Step-1
//Create a XHR object
var request= new XMLHttpRequest()
//Step-2
//Opening a request
//This method tells us which HTTP method as well as Which API
request.open("GET","https://restcountries.com/v3.1/all")

//Step-3
//kick start the HTTP operation
request.send()

//Step-4
//Once the data has been successfully received from the server
//if the status code of the server is 200
//then we need to process the data

//here the JSON.parse convert the JSON string into array of objects
request.onload=function(){
    var data=JSON.parse(request.response)
    console.log("All the countries with a population of less than 2 lacs:");
    var res=data.filter((item)=>{
        if(item.population < 200000){
            console.log(item.name);
        }
    });
}   