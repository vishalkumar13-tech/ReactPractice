import React, { Component } from 'react'
import Message from './Message'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false
        }
    }
    
    render() {
        //  recommed to use this
        return this.state.isLoggedIn && <div>Welcome Vishal</div>

        // 4th approach/recommed to use this
        // return(
        //     this.state.isLoggedIn ?
        //     (<div>Welcome Vishal</div> )
        //     :
        //     (<div>Welcome Guest</div>)
            
        // )

        // 3rd approach
        // let message
        // if(this.state.isLoggedIn){
        //     message= <div>Welcome Vishal</div>
        // }
        // else{
        //     message=<div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // 2nd approach
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //            Welcome Vishal
        //         </div>
        //     )
        // }
        // else{
        //     return(
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }

        // 1st approach
        // return (
        //     <div>
        //         <div>Welcome Vishal</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
