const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img src='' alt='logo' className='logo'></img>
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            Home
          </li>
          <li>
            About Us
          </li>
          <li>
            Contact Us
          </li>
          <li>
            <img src='https://static.vecteezy.com/system/resources/previews/027/381/351/original/shopping-cart-icon-shopping-trolley-icon-shopping-cart-logo-container-for-goods-and-products-economics-symbol-design-elements-basket-symbol-silhouette-retail-design-elements-vector.jpg'
              alt='cart' className='cart-icon'></img>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Header
