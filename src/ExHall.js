import {Link} from "react-router-dom";

const ExHall = () => {
  return (
    <>
      <div className="contentTitleText musPageImg">
        <p className="contText1">Exhibition Hall</p>
        <p className="contText2">Explore a Continent</p>
      </div>
      <div>
        <Link to="/namerica-s">
          <button className="b1">North America</button>
        </Link>
        <Link to="/europe-s">
          <button className="b2">Europe</button>
        </Link>
        <Link to="/asia-s">
          <button className="b3">Asia</button>
        </Link>
        <Link to="/samerica-s">
          <button className="b4">South America</button>
        </Link>
        <Link to="/africa-s">
          <button className="b5">Africa</button>
        </Link>
        <Link to="/australia-s">
          <button className="b6">Australia</button>
        </Link>
      </div>
    </>
  );
}

export default ExHall;