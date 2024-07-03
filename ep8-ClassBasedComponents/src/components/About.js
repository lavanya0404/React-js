import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
  return (
    <div> 
      <h1>About Us</h1>
      <User/>
      <UserClass name={'Lavanya Y M'} location={'Bengaluru'} contact ={'lavanya@gmail.com'} />
    </div>
  )
}
export default About;