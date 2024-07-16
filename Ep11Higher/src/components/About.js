import UserClass from "./UserClass"
import { Component } from "react"
import UserContext from "../utils/userContext"
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
        <div>
          Logged In user
          <UserContext.Consumer>
            {({loggedInUser})=><h1 className="font-serif">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass
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
