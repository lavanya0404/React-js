import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg" alt="logo" className="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li><img src="https://static.vecteezy.com/system/resources/previews/027/381/351/original/shopping-cart-icon-shopping-trolley-icon-shopping-cart-logo-container-for-goods-and-products-economics-symbol-design-elements-basket-symbol-silhouette-retail-design-elements-vector.jpg" alt="cart" className="cart-icon"></img></li>
        </ul>
      </div>
    </div>
  )
};

const stylecard = {
  backgroundColor: "#F0F0F0",
};
// const RestroCard = () => {
//   return (
//     <div className="res-card" style={stylecard}>
//       <h3>Meghana Foods</h3>
//     </div>
//   )
// };
const RestroCard = () => {
  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/zbrpxvywfsrrb7os11jf" className="res-img"></img>
      <h3>Meghana Foods</h3> 
      <h4>Biryani, South India , Asian</h4>
      <h5>4.4 stars</h5>
      <h5>
        Delivered in : 15 minutes
      </h5>   
    </div>
  )
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        Search
      </div>
      <div className="res-container">
        <RestroCard />
        <RestroCard/>
        <RestroCard/>
        <RestroCard/>
        <RestroCard/>
        <RestroCard/>
        <RestroCard />
        <RestroCard/>
        <RestroCard/>
        <RestroCard/>
        <RestroCard/>
      </div>
    </div>
  )
};
const AppLayout = () => {
  return (
    <div>
      <Header/>
      <Body />  
    </div>
  )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);  