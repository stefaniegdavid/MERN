// GIVEN Example
console.log(example);
var example = "I'm the example!";
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";



// #1 =====================

console.log(hello);
var hello = 'world';
// var hello;
//console.log(hello); // undefined
// hello = 'world'



// #2 =====================
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// output is magnet

// #3 ======================
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// output is super cool

// #4 ======================
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//output is chicken
//output is half-chicken

// #5 ======================
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// output would be an error; mean() isn't a function


// #6 ======================
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//output is undefined
//output is rock
//output is r&b
//output is disco

// #7 =====================
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// output is san jose
//output is seattle
// output is burbank
// output is san jose

// BONUS #8 ===============

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// name:Chicago, students: 65, hiring:true
//output is also typeerror on the assignment to constant variable

