
// ES5 - functionally scoped (var)
// es6 -block scoped (let const)

// Scoping
    // function testing(){
    //     var abc = 20;
    //     let def = 100;
    //     console.log(abc);
    //     // Block scope
    //     if(1){
    //         var xyz = 'block scoped';
    //         console.log('Inside If',xyz);
    //         console.log(abc);
    //     }
    //     console.log('Outside if', xyz);
    // }

    // testing(); // calling a function

    // var name = 'Cipher';
    // let year = 2020; // Global Scope

    // function test(){
    //     console.log(name);
    //     console.log(year);
    // }

    // test();

// Function Declaration and Function Expression

// Hoisting 
    // myFunc()
    // myFunc2()

    // function myFunc(){
    //     console.log('Inside myFunc Declaration');
    // }

    // // function expression
    // let myFunc2 = function(){
    //     console.log('Inside myFunc2: function expression');
    // }

    
    // // console.log(name2)
    // name();

    // // var name2= 'Mrudula';
    // function name(){
    //     console.log('hello');
    // }

// Arrow Functions - es6 Feature 
// this - context 

    // let newFunc = () => { 
    //     console.log('Arrow Functions Created');
    //     console.log(this);
    // }

    // newFunc();

    // let funcExp = function(){
    //     console.log(' Function expression Created');
    //     console.log(this);
    // }

    // funcExp()

    let newFunc = name =>  console.log(name); // Arrow
    
    newFunc('cipher'); // argument
