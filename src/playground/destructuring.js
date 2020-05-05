//Object destructuring
const person = {
    name: 'Kristina',
    age: 34,
    location: {
        city: 'Tallinn',
        temp: 9
    }
};

const { name, age } = person;

console.log(`${name} is ${age} years old.`);


//Array destructuring
const address = ['Kajaka 37A', 'Tallinn', 'Estonia', '11317'];

const [, city, country] = address;

console.log(`You are in ${city} ${country}`);