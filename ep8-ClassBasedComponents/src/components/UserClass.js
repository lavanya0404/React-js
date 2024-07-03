import React from 'react';
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);
  }
  render(){
    const {name,location,contact}= this.props;
    return (
    <div className="user-card">
      <h1>Namaste UserClass Component</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h3>Contact: {contact}</h3>
    </div>
    )
  }
}
export default UserClass;