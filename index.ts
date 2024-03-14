//Introduction in using typescript

console.log("Hello! I am web web developer")

//personal information
const personame: string = "MIshal Nadeem"
const age: number = 24
const education: string[] = ["indetermediate/in Science"]
const skills: string[] = ["HTML", "CSS", "JAVASCRIPT", "PYTHON", "TYPESCRIPT"]
const experience: string = "less than 6 months"
const project: string[] = ["Hello world", "calculator", "BMI calculator", "45 assignment using Node Js and typescript"]

//print personal information
console.log(`My name is ${personame}, and i am ${age} years old. `)
console.log(`I am a self - taught developer`)
console.log("I have skills in:")
skills.forEach(skills => console.log("-" + skills))
console.log(` I have ${experience} experience in web development`)
console.log("Som of my Project ")
project.forEach(project => console.log("*" + project))

//conclusion
console.log("Thank you for getting to know me as a web developer")



