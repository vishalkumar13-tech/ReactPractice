import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message:'GoodBye!'
    //     })
    //     console.log(this);
    //   }
    // 2nd  approch 
    clickHandler=()=>{
        this.setState({
            message:'GoodBye!'
        })
        
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* another way  */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
                {/* After adding this.clickHandler = this.clickHandler.bind(this) in constructor  */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
