import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>WAA React Intro</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#14C38E',
          borderRadius: '8px' 
        }}>New Product</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;