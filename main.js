// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
//
// function User(id, name, surname, email, phone) {
//        this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//        this.phone = phone;
//    }
//    let user1 = new User(1, "asya", "petrov", "dsd@com.ua", 8012344556);
//     let user2 = new User(2, "oly", "oiuy", "hg@com.ua", 8012344551);
//     let user3 = new User(3, "ted", "oiuy", "jhg@com.ua", 8012344552)
//     let user4 = new User(4, "god", "trov", "jghkg@com.ua", 8012344553);
//     let user5 = new User(5, "das", "kdkflk", "vkv@com.ua", 8012344554);
//     let user6= new User(6, "msd", "klkdo", "vkkv@com.ua", 8012344555);
//     let user7= new User(7, "ouy", "hjfjkf", "vkvo@com.ua", 8012344556);
//     let user8 = new User(8, "nbv", "odklfk", "fds@com.ua", 8012344558);
//     let user9 = new User(9, "bvhv", "jgl", "dss@com.ua", 8012344444);
//     let user10 = new User(10, "asygfda", "jio", "wqaa@com.ua", 80123445566);
//
// let users = [];
//
// users.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10)
// console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let parni = users.filter((par)=> par.id%2 === 0);
// console.log(parni)

// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// //
// console.log(users.sort(function (a,b){
//     if(a.id < b.id){
//         return -1;
//     }
//     if(a.id > b.id){
//         return 1;
//     }
//     if(a.id === b.id){
//         return 0;
//     }
// }))

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// //
// class client{
//
// constructor(id, name, surname, email, phone,order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;}
// }
// let client1 = new client(1, "asya", "petrov", "dsd@com.ua", 8012344556, ['fdsaa','ytfrr','jhyff']);
// let client2 = new client(2, "oly", "oiuy", "hg@com.ua", 8012344551, ['fdsaa','ytfrr','jhyff', 'mnbnbvb']);
// let client3 = new client(3, "ted", "oiuy", "jhg@com.ua", 8012344552,['fdsaa','ytfrr','jhyff','nvnnvn','nvnbvnvn'])
// let client4 = new client(4, "god", "trov", "jghkg@com.ua", 8012344553, ['fdsaa','ytfrr']);
// let client5 = new client(5, "das", "kdkflk", "vkv@com.ua", 8012344554, ['fdsaa']);
// let client6= new client(6, "msd", "klkdo", "vkkv@com.ua", 8012344555,['fdsaa','ytfrr','jh']);
// let client7= new client(7, "ouy", "hjfjkf", "vkvo@com.ua", 8012344556, ['fdsaa','ytfrr','ff']);
// let client8 = new client(8, "nbv", "odklfk", "fds@com.ua", 8012344558, ['faa','ytfrr','jhyff','mvvvmvn','vnv','vnnvn']);
// let client9 = new client(9, "bvhv", "jgl", "dss@com.ua", 8012344444, ['fdsaa','ytfrr','jhyff']);
// let client10 = new client(10, "asygfda", "jio", "wqaa@com.ua", 80123445566,['fdsaa','ytfrr']);
//
// let clients = [];
//
// clients.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10)
// console.log(clients)

//
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// //
// console.log(clients.sort(function (a,b){
//     if(a.order.length < b.order.length){
//         return -1;
//     }
//     if(a.order.length > b.order.length){
//         return 1;
//     }
//     if(a.order.length === b.order.length){
//         return 0;
//     }
// }))


// // // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

//
// function Car(model, manufacture, year,maxspeed,engine) {
//        this.model = model;
//        this.manufacture = manufacture;
//        this.year = year;
//        this.maxspeed = maxspeed;
//        this.engine = engine;
//
//
//     this.addDriver=function (driver){
//         this.driver=driver
//     }
// }
//
//    let car = new Car('tesla', 'A1', 2022, 240, '4l')
// console.log(car)

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
// Car.prototype.drive =function (){
//     return `їдемо зі швидкістю ${this.maxspeed} на годину`;
// }
// console.log(car.drive())

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
// Car.prototype.increaseMaxSpeed =function (newSpeed){
//     return this.maxspeed=this.maxspeed+ newSpeed
// }
// car.increaseMaxSpeed( 100)
// console.log(car)

// // -- changeYear (newValue) - змінює рік випуску на значення newValue

//
// Car.prototype.greeting =function (){
//     return `${this.year}`
// }
// let carz = new Car('tesla', 'A1', 2023, 240, '4l')
// console.log(carz.greeting())

// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// let vodii = {name: 'vasya', age: 31, status: false};
//
// car.addDriver(vodii)
// console.log(car);
//

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//
// class Cars{
//        constructor(model, manufacture, year,maxspeed,engine) {
//               this.model = model;
//               this.manufacture = manufacture;
//               this.year = year;
//               this.maxspeed = maxspeed;
//               this.engine = engine;
//        }
//   info(){
//            for  (const carKey  in this){
//                if(typeof this[carKey] !== 'function'){
//                    console.log(`${carKey}--${this[carKey]}`)
//                }
//            }
//     }
//     addDriver (driver) {
//         this.driver = driver
// }
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// //
// //        greeting() {
// //            return `їдемо зі швидкістю ${this.maxspeed} на годину`
// //        }
//        // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//        //
//        // greeting(){
//        //               return `їдемо зі швидкістю ${this.maxspeed +100} на годину`
//        // }
//        // -- changeYear (newValue) - змінює рік випуску на значення newValue
//        greeting(){
//               return ` newValue${this.year =2023} `
//        }
//
// }
// let car = new Cars('tesla', 'A1', 2022, 240, '4l')
// car.info()
// console.log(car)
// let vodii = {name: 'vasya', age: 31, status: false};
// car.addDriver(vodii)
// console.log(car.greeting())
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Popelushka(name,age,footSize){
    this.name=name
    this.age= age
    this.footSize=footSize
}
let Popelushka1= new Popelushka( 'avka',20,31 )
let Popelushka2= new Popelushka( 'dasha',21,30 )
let Popelushka3= new Popelushka( 'tar',22,39 )
let Popelushka4= new Popelushka( 'hio',20,34 )
let Popelushka5= new Popelushka( 'ljf',20,38 )
let Popelushka6= new Popelushka( 'poi',20,37 )
let Popelushka7= new Popelushka( 'kji',27,36 )
let Popelushka8= new Popelushka( 'jhg',29,34 )
let Popelushka9= new Popelushka( 'gfhdj',10,32 )
let Popelushka10= new Popelushka( 'gasdf',2,34 )

let arrPopelushka=[]
arrPopelushka.push(Popelushka1,Popelushka2,Popelushka3,Popelushka4,Popelushka5,Popelushka6,Popelushka7,Popelushka8,Popelushka9,Popelushka10)

class Prince{
    constructor(name,age,findFootSize) {
        this.name=name
        this.age=age
        this.findFootSize=findFootSize
    }
}
let prince = new Prince( 'Petay',  40, 30)
    let findPopelushka = (arr,boy)=>{
    for (let item of arr){
        if (item.footSize===boy.findFootSize){

            console.log(`My Popelushka is ${item.name}`)
        }
    }
    }
findPopelushka(arrPopelushka,prince)

