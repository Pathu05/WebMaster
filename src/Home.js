import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid full-width">
      <div className="row titleBlock">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p className="text-center homeTitleText">Unity Festival!</p>
          <p className="text-center homeInspirText">Come and learn about cultures around the world and celebrate diversity</p>
        </div>
      </div>

      

      <div className="row row-no-gutter pad-title">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p className="subHomeText homeLeft">Explore the Cuisine Exhibit (EDIT HERE)</p>
          <p className="desHomeText homeLeft">Cuisine Description (EDIT HERE)</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <img src="https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg" className="img-responsive img-right img-full-width" width="100%" height="100%"/>
        </div>
      </div>

      
      
      <div className="row row-no-gutter pad-init">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <img src="https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_1280.jpg" className="img-responsive img-left img-full-width" width="100%" height="100%"/>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p className="subHomeText homeRight">Explore the Clothing Exhibit (EDIT HERE)</p>
          <p className="desHomeText homeRight">Clothing Description (EDIT HERE)</p>
        </div>
      </div>

      
    </div>
  );
}
 
export default Home;