import UserClass from "./UserClass"
import { Component } from "react"
class About extends Component {
  constructor(props) {
    super(props)
    //console.log("Parent constructor")
  }
  componentDidMount() {
    //console.log("Parent componentDidMount")
  }
  render() {
    // console.log("Parent render")
    return (
      <div>
        <h1>About Us</h1>
        <UserClass
          name={"Lavanya Y M"}
          location={"Bengaluru"}
          contact={"lavanya@gmail.com"}
        />
      </div>
    )
  }
}
//Functional component-->
// const About=()=>{
//   return (
//     <div>
//       <h1>About Us</h1>
//       {/* <User name={'Lavanya Y M'}/> */}
//       <UserClass name={'Lavanya Y M'} location={'Bengaluru'} contact ={'lavanya@gmail.com'} />
//     </div>
//   )
// 



export default About
