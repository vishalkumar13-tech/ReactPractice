import React from 'react'
import Person from './Person';
function PersonList() {
    const persons  = [
        {
            id : 1,
            name : 'bruce',
            age : 30 ,
            skill : 'React',
        },
        {
            id : 2,
            name : 'clark',
            age : 25 ,
            skill : 'Angular',
        },
        {
            id : 3,
            name : 'Martin',
            age : 29 ,
            skill : 'Vue',
        }
    ]
    const personList = persons.map(person => <Person person={person}/>)
    return <div>{personList} </div>
        //  <h2>
        //      I am {person.name}.I am {person.age} years old.My skill is {person.skill} 
        //  </h2> 

    // ))
    // return <div>{personList} </div>

}

export default PersonList
