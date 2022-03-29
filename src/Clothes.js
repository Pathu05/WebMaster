import {Link} from "react-router-dom";

const Clothes = () => {
  return (
    <>
      <div className="contentTitleText cloPageImg">
        <p className="contText1">Clothes</p>
        <p className="contText2">Explore a Continent</p>
      </div>
      <div>
        <Link to="/namerica-l">
          <button className="l1">North America</button>
        </Link>
        <Link to="/europe-l">
          <button className="l2">Europe</button>
        </Link>
        <Link to="/asia-l">
          <button className="l3">Asia</button>
        </Link>
        <Link to="/samerica-l">
          <button className="l4">South America</button>
        </Link>
        <Link to="/africa-l">
          <button className="l5">Africa</button>
        </Link>
        <Link to="/australia-l">
          <button className="l6">Australia</button>
        </Link>
      </div>
    </>
  );
}
 
export default Clothes;