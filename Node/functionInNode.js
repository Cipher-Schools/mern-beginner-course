
one();

function one(){
    console.log('Normal Function')
}

function three(callBack){
    callBack();
}

let two = function(){
    console.log('Two');
}

three(two);
// two();


