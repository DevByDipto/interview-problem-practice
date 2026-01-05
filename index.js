// problem-1
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

const withoutFemalePersons = persons.filter((person)=> person.gender !== "female")
const withoutFemalePersonsNames = withoutFemalePersons.map((person)=>person.name)
// console.log("problem-1 ans:",withoutFemalePersonsNames);

// probem-2
const books = [
    {
        title:"book-A",
         author:"pubali",
          year:"2025"
    },
    {
        title:"book-B",
         author:"rupali",
          year:"2024"
    },
    {
        title:"book-c",
         author:"pubali",
          year:"2025"
    },
]

const bookTitleArray = books.map((book)=>book.title)
// console.log("problem-2 ans:",bookTitleArray);

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
   return cars.sort((a, b) => a.year - b.year)
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
