const myFullName = 'Pranaam' + '' + 'Dhiman';
const myStudentNumber = 1224598;

const result = `${myFullName} ${'-'} ${myStudentNumber}`
console.log(result);


const element = document.querySelector("h1");
element.innerHTML = result;

element.classList.add ("primaryheading")

console.log(element);