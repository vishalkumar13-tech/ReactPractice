import React from 'react'
import reactDom from 'react-dom'

const Hello = () => {
    // return (
    //     <div className:'dummyClass'>
    //        <h1>Heloo vishal</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
         {id:'Hello',className:'dummyClass'},
          React.createElement('h1', null, 'Hello vishal')
          )
}

export default Hello