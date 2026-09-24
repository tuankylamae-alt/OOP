let studentName = "Mae Guzman";
let studentAge = 17;
let course = "BS Nursing";
let favFood = "Fries";
let favColor = "Navy blue";
let favMovie = "Five Feet Apart";
let favSports = "Volleyball";
let kpopBias = "Jungkook";
let dreamCountry = "Switzerland";
let motto = "God will Provide";

// 10 const variables 

const school = "Ateneo De Manila";
const teacher = "Mr. Juan";
const section = "BSN-3B";
const language = "English";
const passinGrade = "93";
const country = "Switzerland";
const subject = "Anatomy and Physiology";
const failingGrade = "74";
const room = "Room 301";
const yearLevel = " 3rd year";

// arrow functions

const greet = () => "Hello, BSN Students!";
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const isPassing = (grade) => grade >= passingGrade;


// template literals

const message1 = `Hello, ${studentName}!`;
const message2 = `${studentAge}  years old.`;
const message3 = `You are taking ${course}`;
const message4 = `Your fav food is ${favFood}`;
const message5 = `Your fav color is ${favColor}`;
const message6 = `Your fav movie is ${favMovie}`;
const message7 = `Your fav sport ${favSports}`;
const message8 = `Your kpop bias ${kpopBias}`;
const message9 = `Your dream country ${dreamCountry}`;
const message10 = `Your motto ${motto}`;


// 3 destructed arrays

const colors = ["Pink", "White", "Navy Blue"];
const [firstfavColor, secondfavColor, thirdfavColor] = colors;

const Language = "Bisaya, English, Tagalog";
const [firstLanguage, secondLanguage, thirdLanguage] = language;

const food = ["Fries, Pizza, Burger"];
const [firstfavFood, secondfavFood, thirdfavFood] = food;

// destructed object literals

const student = {
    name: "Keana",
    studentAge: 17,
    Course: "BS MedTech"
};

const {Name, age, Course} = student;

const teacherInfo = {
    name: "Ms. Anya",
    Age: 23,
    Subject: "Anatomy and Physiology"
}; 

const {name, Age, Subject} = teacherInfo;

const schoolInfo = {
    schoolName: "Ateneo De Manila",
    schoolAddress: "Manila",
    schoolCountry: "Philippines"
};

const {schoolName, schoolAddress, schoolCountry} = schoolInfo;

// 2 arrays using spread operations

const sports = ["Volleyball", "Basketball", "Badminton"];
const moreSports = [...sports, "Volleyball", "Basketball"];
const foods = ["Fries", "Pizza", "Ice cream"];
const all = [...sports, ...foods];

// 2 object literals using spread operations

const Student = {
    name: "Takuro",
    age: 6
};

const completeStudent = {
    ...Student,
    yearLevel: "1",
    grade: 95
};

const Teacher = {
    name: "Mr. James",
    subject: "English"
};

const completeTeacher = {
    ...Teacher,
    gradeLevel: "1",
    experience: 5
};

// 2 arrays using .map()
const scores = [91, 92, 93, 94, 95];
const doubledScores = scores.map(score => score * 2);
const names = ["Mae", "Keana", "Takuro"];
const upperCaseNames = names.map(name => name.toUpperCase());

// 2 arrays using .filter()
const grades = [80, 81, 82, 83, 84, 85];
const passingGrade = grades.filter(grade => grade >= 79);
const ages = [16, 17, 18, 19, 20];
const minors = ages.filter(age => age >= 17);

// 2 object literals  using optional chaining
const user = {
    profile: {
        name: "Mae",
        address: {
            city: "Manila"
        }
    }
};

const userCity = user?.profile?.address?.city;

const employee = {
    information: {
        position: "Student nurse",
        department: {
            name: "CON"
        }
    }
};

const departmentName = employee?.information?.department?.name;

// Display Results

console.log(message1);
console.log(message2);
console.log(message3);
console.log(message4);
console.log(message5);
console.log(message6);
console.log(message7);
console.log(message8);
console.log(message9);
console.log(message10);

console.log(greet());
console.log(add(10,5));
console.log(multiply(4,5));
console.log(isPassing(79));


console.log(firstfavColor, secondfavColor, thirdfavColor);
console.log(firstLanguage, secondLanguage, thirdLanguage);
console.log(firstfavFood, secondfavFood, thirdfavFood);

console.log(studentName, studentAge, course);
console.log(studentAge, age, subject);
console.log(schoolName, schoolAddress, schoolCountry);

console.log(moreSports);
console.log(all);

console.log(completeStudent);
console.log(completeTeacher);

console.log(doubledScores);
console.log(upperCaseNames);

console.log(passingGrade);
console.log(minors);

console.log(userCity);
console.log(departmentName);





