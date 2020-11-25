// Objects

let obj = { name: "Cipher" }
// console.log(obj);

let personOne ={
    name: 'John',
    email: 'john@wick.com',
    count: 0,
    age: 45,
    status: true, 
    children: {
        name: 'Jay'
    },  
    hobbies: ['Reading', 'Writing', true, 100, null], // Array,
    login(){
        // console.log(this)
        console.log( this.name, 'has logged in');
        return this;
    },
    logout(){
        console.log('Logout', this.login());
    },
    updateLogin(){
        this.count++;
        console.log(this.count);
        return this;
    },
}



// person.test();
// person.login(); // Method

// console.log('hello'.toUpperCase());

// console.log(this);

// Method chaining
// person.login().updateLogin().updateLogin().logout();
// // .logout();
// console.log(person.count);