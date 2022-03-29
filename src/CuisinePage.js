import {Link} from "react-router-dom";

const CuisinePage = () => {
  return (
    <>
      <div className="contentTitleText cusPageImg">
        <p className="contText1">Cuisines</p>
        <p className="contText2">Explore a Continent</p>
      </div>

      <div>
        <Link to="/namerica-c">
          <button className="c1">North America</button>
        </Link>
        <Link to="/europe-c">
          <button className="c2">Europe</button>
        </Link>
        <Link to="/asia-c">
          <button className="c3">Asia</button>
        </Link>
        <Link to="/samerica-c">
          <button className="c4">South America</button>
        </Link>
        <Link to="/africa-c">
          <button className="c5">Africa</button>
        </Link>
        <Link to="/australia-c">
          <button className="c6">Australia</button>
        </Link>
      </div>
    </>
  );
}

export default CuisinePage;