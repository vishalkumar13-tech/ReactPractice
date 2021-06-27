import React from 'react'

// function Greet() {
//     return <h1>Hello vishal </h1>
// }
// Rewrite with es6 convention
// We can use named export also 
// const Greet = (props)=>{
  // can be written as 
  // const Greet = ({name,heroName})=>{
    // can be written as
    const Greet = props=>{
    const {name,heroName}=props
//  console.log(props)
 return(
   <div>
       {/* <h1>Hello {props.name} a.k.a {props.heroName} </h1>
       {props.children} */}
       <h1>Hello {name} a.k.a {heroName} </h1>
   </div>  
)
}
export default Greet