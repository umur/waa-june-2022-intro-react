import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li> <Link to='/signup'>Sign Up </Link></li>
          <li> <Link to='/login'>Login </Link></li>
        </ul>



      </nav>
    </div>
  )

};

export default Header;