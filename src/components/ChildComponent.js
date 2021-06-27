import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* calling greetHandler from ParentComponent */}
            <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
