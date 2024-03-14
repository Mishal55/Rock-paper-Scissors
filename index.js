//Introduction in using typescript
console.log("Hello! I am web web developer");
//personal information
var personame = "MIshal Nadeem";
var age = 24;
var education = ["indetermediate/in Science"];
var skills = ["HTML", "CSS", "JAVASCRIPT", "PYTHON", "TYPESCRIPT"];
var experience = "less than 6 months";
var project = ["Hello world", "calculator", "BMI calculator", "45 assignment using Node Js and typescript"];
//print personal information
console.log("My name is ".concat(personame, ", and i am ").concat(age, " years old. "));
console.log("I am a self - taught developer");
console.log("I have skills in:");
skills.forEach(function (skills) { return console.log("-" + skills); });
console.log(" I have ".concat(experience, " experience in web development"));
console.log("Som of my Project ");
project.forEach(function (project) { return console.log("*" + project); });
//conclusion
console.log("Thank you for getting to know me as a web developer");
