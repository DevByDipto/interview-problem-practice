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


