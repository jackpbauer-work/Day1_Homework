//TODO: Assign corresponding variables
/////////////////////////////////////////////////////
let myName = "Jack"
let myAge = 29
let myCity = "New York"
/////////////////////////////////////////////////////
const myObj = {
    name: myName,
    age: myAge,
    city: myCity,
}

//TODO: Print the name, age, and city inside myObj using dot 
//TODO: notation.
//////////////////////////////////////////////////////
console.log(myObj.name)
console.log(myObj.age)
console.log(myObj.city)

/////////////////////////////////////////////////////

const arrayOfObjects = [
    {
        name: "Bob",
        age: 15,
        city: "Philadelphia"
    },
    {
        name: "Alex",
        age: 20,
        city: "NYC"
    },
    {
        name: "Laura",
        age: 34,
        city: "Boston"
    }
]

//TODO: Print out Alex's name, age and city
/////////////////////////////////////////////////////

console.log[arrayOfObjects[1].name]



/////////////////////////////////////////////////////
//TODO: Iterate through arrayOfObjects using a forEach and
//TODO: print out all names
/////////////////////////////////////////////////////

arrayOfObjects.forEach (employee => {
    console.log(employee.name)
})


/////////////////////////////////////////////////////
//TODO: Iterate through arrayOfOjbects using .map and
//TODO: increment everyone's age by one
//! Remember, map needs a return value
const incrementYear = arrayOfObjects.map(employee => {
    return employee.age + 1
})
console.log(incrementYear)

