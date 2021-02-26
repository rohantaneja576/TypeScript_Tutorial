import axios from 'axios'

// function welcomePerson(person:Person):string{
//     console.log(`${person.firstName} ${person.lastName}`);
//     return `${person.firstName} ${person.lastName}`;
// }

// const person = {
//     firstName:'Rohan',
//     lastName:'taneja'
// }

// interface Person {
//     firstName:string,
//     lastName:string
// }

// welcomePerson(person)


function getData() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
}

getData()