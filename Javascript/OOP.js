// ES6 Class keyword
// ES5 Prototypes

// console.log({ name: 'Audi'});

class Person{
    constructor(name= 'Jon Doe', email='john@doe.com', count=0){
        this.name = name;
        this.email = email;
        this.count = count;
    }
    login(){
        console.log(this.name, 'has logged in!')
    }
    logout(){
        console.log(this.name, 'has logged out!')
    }
}

// new keyword:creating an instance of Person class
let person1 = new Person('John', 'john@wick.com');
let person2 = new Person('Jay', 'jay@z.com');
let person3 = new Person('Jake', 'jake@tyler.com', 20);

person1.login();
person2.login();
console.log(typeof person3);

// Number 

let rollNo = new Number(10);
console.log(typeof rollNo, typeof 10);

let nm = new String('Nithin');
console.log(nm.toUpperCase());

let obj = new Object({name: 'Manas'});
console.log(obj);

