const http=require("http");
const os = require("os");

const vasya = 
{
    name: "Vasya",
    age : "10",
    type : "dolphin"
}
const username = os.userInfo().username;
const today = new Date()
http.createServer(function(require,response){
    response.end("Hello NodeJS!");
}).listen(3000,"127.0.0.1", function(){
    console.log("Сервер начал прослушивание запросов на порту 3000")
    console.log('\x1b[34m%s\x1b[0m', "Дата запроса: " + today.getFullYear() + "." + today.getMonth() + "." + today.getDate() + " - " + today.getHours() + ":" + today.getMinutes() + "." + today.getSeconds())
    console.log("Hello " + username);
    console.log('\x1b[31m%s\x1b[0m',"You should say hello to " + vasya.type  + " " + vasya.name + "\nYou must to do it with respect.")
})