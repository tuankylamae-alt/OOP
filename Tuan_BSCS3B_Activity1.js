let name = "Kyla";
let studentAge = "20";
let address = "Korea";

var colors = ["White","Pink","Navy Blue"];
var drinks = ["Coke","Sprite","Royal"];
var subjects = ["Science","Math","English"];

console.log("Name:", name);
console.log("StudentAge:", studentAge);
console.log("Address:", address);

console.log("\nColors:");
for (var j = 0; j < colors.length; j++){
    console.log ((j+1)+ "."+ colors [j]);
}

console.log("\nDrinks:");
for (var i = 0; i < drinks.length; i++){
    console.log ((i+1)+ "."+ drinks [i]);
}

console.log("\nSubjects:");
for (var k = 0; k < subjects.length; k++){
    console.log ((k+1)+ "."+ subjects [k]);
}

if(studentAge < 20) {
    console.log("\nStatus: Minor");
} else if (studentAge >= 20 && studentAge < 80){
    console.log("\nStatus: Adult");
} else{
    console.log("\nStatus:Senior");
}

if(colors.length >= 3){
    console.log("Note: 3 or more colors");
} else {
    console.log("Note: 2 colors");
}

if(drinks.length >= 3){
    console.log("Note: 3 drinks");
} else {
    console.log("Note: only 2 drinks available");
}