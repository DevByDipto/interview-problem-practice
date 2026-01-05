// problem-1
{
function getMaleNames(persons) {
    
    const males = persons.filter(person => person.gender !== "female");
    
   
    const maleNames = males.map(person => person.name);
   
    return maleNames;
}

// Example array
const persons = [
    { name: "dipto", age: 23, gender: "male" },
    { name: "sneha", age: 13, gender: "female" },
    { name: "joy", age: 33, gender: "male" },
    { name: "ripon", age: 29, gender: "male" }
];

// 5. Function call এবং output দেখানো
const result = getMaleNames(persons);
console.log("Problem-1 Answer:", result);

}
// probem-2
{
    
}

// proble-3
 const squareFunction=(num)=>{
        const squareResult = num * num    
         return doubleFunction(squareResult)
}

const doubleFunction = (num)=>{
     const doubleResult = num + num
    return AddFiveFunction(doubleResult)
}
const AddFiveFunction = (num)=>{
     const AddFiveResult = num + 5
     return AddFiveResult
}

const result = squareFunction(5)
// console.log(result);

// problem-4

const cars = [
    {
        make:"dipto",
         mode:"hunda",
         year:new Date(2023, 11, 1) 
    },
    {
        make:"dipto",
         mode:"hunda",
         year:new Date(2023, 0, 10)
    },
    {
        make:"dipto",
         mode:"hunda",
         year:new Date(2026, 1, 5)
    },
]

const carsSortedFunction=(carsArr)=>{
   return carsArr.sort((a, b) => a.year - b.year)
}

const probleFourresult = carsSortedFunction(cars)
// console.log(probleFourresult);

// problem -5
{
    const persons = [
    {
        name:"dipto",
        age:23,
        gender:"male"
    },
    {
        name:"sneha",
        age:13,
        gender:"female"
    },
    {
        name:"joy",
        age:33,
        gender:"male"
    },
    {
        name:"ripon",
        age:29,
        gender:"male"
    }
]

const updatePersonFunction = (name)=>{
for (const person of persons) {
    if(person.name === name){
person.age= 5
    }
}
}

updatePersonFunction("ripon")
console.log("problem-5 ans:",persons);
}

// problem-6
{
   
const sumEvenNumbers = (numbers) => {
    return numbers.reduce((acc, curr) => {
        if (curr % 2 === 0) {
            return acc + curr; 
        } else {
            return acc; 
        }
    }, 0);
};


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];


const result = sumEvenNumbers(numbers);
console.log("Sum of even numbers:", result);

}

// problem-7
{
    
const isLeapYear = (year) => {
    if (year % 400 === 0) {
        return true; 
    } else if (year % 100 === 0) {
        return false; 
    } else if (year % 4 === 0) {
        return true; 
    } else {
        return false; 
    }
};


const year = 2024;
if(isLeapYear(year)) {
    console.log(year + " is a leap year 🎉");
} else {
    console.log(year + " is not a leap year");
}

}