import {Link} from "react-router-dom";

const NavBar= () => {
  return (
    /*
    <nav className="navbar navbar-expand-sm navbar-light bg-dark">
      <Link to="/" className="nav-link link-light">International Festival</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link navClassThing">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/ex" className="nav-link navClassThing">Music</Link>
          </li>
          <li className="nav-item">
            <Link to="/cuis" className="nav-link navClassThing">Cuisines</Link>
          </li>
          <li className="nav-item">
            <Link to="/clo" className="nav-link navClassThing">Clothes</Link>
          </li>
        </ul>
      </div>
    </nav>
    */

    <nav className="navbar">
      <div className="navStyle">
        <Link to="/" className="navMainButton"><div><p className="navMainButtonText">International Festival</p></div></Link>
      </div>
      <div className="navLinks">
          <Link to="/clo"><button className="navLButton">Clothing</button></Link>
          <Link to="/cuis"><button className="navGButton">Cuisine</button></Link>
          <Link to="/"><button className="navGButton">Home</button></Link>
      </div>
    </nav>
  );
}
 
export default NavBar