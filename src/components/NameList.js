import React from 'react'

function NameList() {
    const names = ['Bruce','Clark','Diana']
    const nameList = names.map(name => <h2>{name}</h2> )
    return <div>{nameList} </div>
    // return (
    //     <div>
    //        {/* <h2>{names[0]}</h2> 
    //        <h2>{names[1]}</h2> 
    //        <h2>{names[2]}</h2>  */}
    //        {/* To evaluate javascipt method in jsx we have to write it in {} braces */}
           
    //     </div>
    // )
}

export default NameList
