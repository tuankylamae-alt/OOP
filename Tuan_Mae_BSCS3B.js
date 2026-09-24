// variable
let studentName = "Kyla Mae";
let yearLevel = "3rd year";
let passingGrade = 80;

// Arrays
let subject = ["Math","Science", "English"];
let names = ["Jungkook", "Taehyung", "Jimin"];
let grades = [88,90,92];

// object literals
// obj let #1
const schoolInfo = {
    name: "Ateneo De Manila",
    location: "Manila",
    type: "Private School"
};
// obj let #2
const classSchedule = {
    morning: "English and Science",
    afternoon: "Mathematics",
    dismissal: "5:30"
};

// 4 classes
// class #1
class University {
    #department;
    constructor(department){
        this.#department = department;
    }
    // encap
    get department(){
        return this.#department;
    }
    set department(department){
        this.#department = department;

    }
    // abstraction
    program(){
        console.log("University Program");
    }
}
// class #2
//inheritance
class CCIS extends University {
    program(){
        console.log("BSEMC, BSCS, BSIS, BSIT");
    }
}
//class #3
class CON extends University {
    program(){
        console.log("Nursing");
    }
}
// polymorphism
// object #1
let dep1 = new CCIS();
// object #2
let dep2 = new CON();

dep1.program();
dep2.program();

// class #4
// encap
class Student {
    #studentName;
    #studentDepartment;
    
    constructor(name,department){
        this.#studentName = name;
        this.#studentDepartment = department;
    }
    get studentName(){
        return this.#studentName;

    }
    set studentName(name){
        this.#studentName = name;
    }
    get studentDepartment(){
        return this.#studentDepartment;
    }
    set studentDepartment(program){
        this.#studentDepartment = program;
    }
}
// object #3
let info = new Student("Mae Tuan", "CCIS");

console.log("Student Name:", info.studentName);
console.log("Student Department:", info.studentDepartment);
// object #4
let univ = new University("CCIS");
console.log("Department:", univ.department);

// condition #1
if (passingGrade >= 80){
    console.log("PASADO!");
} else {
    console.log("HINDI PASADO!");
}

// condition #2
if (studentName === "Kyla Mae"){
    console.log("MAY TAMA KA!");
} else {
    console.log("MAY MALI KA!");
}

// condition #3
if (yearLevel === "3rd year"){
    console.log("YEZZZZ");
} else {
    console.log("OMGGGGG");
}

// loop #1
for(let i = 0; i < subject.length; i++){
    console.log((i+1)+ "." + subject[i]);
}
// loop #2
for(let j = 0; j < names.length; j++ ){
    console.log((j+1)+"."+ names[j]);
}
// loop #3
for(let k = 0; k < grades.length; k++){
    console.log((k+1)+"."+ grades[k]);
}
