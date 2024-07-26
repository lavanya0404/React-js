import React from "react"
class UserClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo:{
        name: "Default",
        location: "Default",
        contact: "+91XXXXXXXXX",
        
      }
    }
  }
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/lavanya0404");
    const json = await data.json();
    this.setState({ userInfo: json })
    console.log(json);
  }
  render() {
    // const { name, location, contact } = this.props;
    const { name,id,repos_url,avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <button
          className="about-btn"
          onClick={() => {
            this.setState({ count: this.state.count + 1 })
          }}
        >
          Count
        </button> */}
        {/* <h2>Count : {count}</h2> */}
        <h2>Name: {name}</h2>
        <h3>ID: {id}</h3>
        <h3>Repository link: {repos_url}</h3>
        <img src={avatar_url}></img>
      </div>
    )
  }
}
export default UserClass
