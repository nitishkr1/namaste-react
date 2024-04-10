import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
  return (
  <div className='header-container'>
    <div className='logo-container'>
      <img src='https://www.creativefabrica.com/wp-content/uploads/2023/06/10/Fast-Food-Burger-Restaurant-Logo-Graphics-71757752-1.jpg' className='logo' />
    </div>
    <div className='menu-container'>
      <ul className='menu-list'>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
  )
}

const RestaurantCard = () => {
  return (
    <div className='res-card'>
      <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x7bcibhxfnrupph6bcft' className='res-logo' alt='res-logo' />
      <h3>The Burger Club</h3>
      <h4>American, Beverages, Desserts</h4>
      <h4>4.1 Star 35-40 mins</h4>
      <h4>Karol Bagh</h4>
    </div>
  )
}


const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
  <div className='app'>
    <Header />
    <Body />
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
