const fs = require("fs");
const EventEmitter = require("events");
const emitter = new EventEmitter();
 
const writeableStream = fs.createWriteStream("hello.txt");
let i = 0;
let work = true;


const readableStream = fs.createReadStream("hello.txt");
 
readableStream.on("data", function(chunk){
    console.log(chunk.toString());
});

emitter.on("go", function(){ 
    emitter.emit("ready", "go")
    console.log("go\n")
    writeableStream.write("go!\n");
})

emitter.on("ready", function(previous){ 
    console.log("ready\n")
    if(i == 10) {writeableStream.end("stop! It is all!\n"); work = false}
    else writeableStream.write("ready!\n");
    i = i+1; 
    if(previous == "go" && work)
    {
        emitter.emit("stop");
    }
    else if(previous == "stop" && work)
    {
        emitter.emit("go");
    }
})
emitter.on("stop", function(){
    console.log("stop\n")
    emitter.emit("ready", "stop")
    writeableStream.write("stop!\n");
})

emitter.emit("go");
/*const EventEmitter = require("events");
const emitter = new EventEmitter();
 
const eventName = "greet";
 
emitter.on(eventName, function(username){
    console.log("Прив", username);
});
 
class User{
    constructor(username, emitter){
        this.name = username;
        this.emitter = emitter;
    }
    sayHi() {
        console.log("Привет. Меня зовут", this.name);
    this.emitter.emit(eventName, this.name);    // генерируем событие, передаем обработчику имя
    }
}
 
const tom = new User("Tom", emitter);
tom.sayHi();*/

/*const EventEmitter = require("events");
const emitter = new EventEmitter();
 
const eventName = "greet";
 
emitter.on(eventName, function(data){
    console.log(data);
});
 
class User extends EventEmitter {
    constructor(username){
        super();    // вызываем конструктор EventEmitter
        this.name = username;
    }
    sayHi() {
        console.log("Привет. Меня зовут", this.name);
    this.emit(eventName, this.name);    // генерируем событие, передаем обработчику имя
    }
}
 
const tom = new User("Tom");
// добавляем к объекту tom обработку события "greet"
// обработчик ожидает получить через параметр имя пользователя
tom.on(eventName, function(username){
    console.log("Привет,", username);
});
// при выполнении метода генерируется событие "greet"
tom.sayHi();*/

/*const EventEmitter = require("events");
const emitter = new EventEmitter();
 
const eventName = "greet";
 
emitter.on(eventName, function(data){
    console.log(data);
});
 
emitter.emit(eventName, "Привет пир!")*/

/*const EventEmitter = require("events");
// определяем эмиттер событий
const emitter = new EventEmitter();
 
// имя события, которое будет обрабатываться
const eventName = "greet";
 
// регистрируем три обработчика для события "greet"
emitter.on(eventName, function(){
    console.log("Hello World!");
});
emitter.on(eventName, function(){
    console.log("Привет мир!");
});
emitter.on(eventName, function(){
    console.log("Hallo Welt!");
});
 
// генерируем событие greet
emitter.emit(eventName);*/

/* on (eventName, listener): псевдоним метода on(). Регистрирует новый слушатель listener для события eventName.
 * addListener(eventName, listener): псевдоним метода on(). Регистрирует новый слушатель listener сдля события eventName.
 * emit(eventName [, args]): запускает событие. В качестве обязательного параметра принимает имя события. Также дополнительно можно передать необязательный параметр - аргументы для обработчика события
 * eventNames(): возвращает массив с именами событий, для которых зарегистрированы слушатели 
 * getMaxListeners(): возвращает максимальное количество слушателей для данного эмиттера событий.
 * listenerCount(eventName): возвращает количество слушателей события eventName
 * listeners(eventName): возвращает массив со слушателями события eventName.
 * once(eventName, listener): регистрирует новый слушатель listener для события eventName, но выполняет его не более одного раза.
 * prependListener(eventName, listener): регистрирует новый слушатель listener для события eventName и помещает его в начало массива слушателей события eventName.
 * prependOnceListener(eventName, listener): аналогичен prependListener() за тем исключением, что слушатель listener вызывается не более одного раза.
 * removeAllListeners([eventName]): удаляет всех слушателей события eventName
 * removeListener(eventName, listener): удаляет слушателя listener для события eventName.
 * setMaxListeners (п): устанавливает максимальное количество слушателей событий, которые можно зарегистрировать для каждого события в эмиттере событий
*/