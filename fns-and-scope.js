//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
function isTyler(name) {
    if (newName === name) {
        return true;
    }
    else {
        return false;
    }
}
var newName = 'Tyler';
isTyler(name);
//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName() {
    var name = prompt("Enter your name");
    return name;
}
alert(getName());


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.
function getName() {
    var name = prompt("Enter your name");
    return name;
}
function welcome() {
   return alert("Welcome " + getName());
}

welcome();



//Next problem




//What is the difference between arguments and parameters?

Arguments are declared in the call to the function.
Parameters are declared in the function.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


Falsy values are: undefined, null, 0, "", false, NaN;
Check something is falsy : evaluating a boolean expresion using !(value) , notValue. 


//Next Problem



//Create a function called myName that returns your name
function myName() {
    var name = "Daniel";
    return name;
}
myName();

//Now save the function definition of myName into a new variable called newMyName
var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn(){
    return function() {
        return newMyName();
    }
}
//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.
innerFn();