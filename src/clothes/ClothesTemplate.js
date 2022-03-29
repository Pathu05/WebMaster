import {Link} from "react-router-dom";

const ClothesTemplate = () => {
  return (
    /*
    <>
        <div className="homeTitle">
          <h1 className="homeTitleText">Welcome to the Unity Culture Festival</h1>
        </div>

        <div className="homeBox1">
          <table>
            <tr>
              <td className="textBox1">
                <div className="homeText1">
                  <p className="textStyle1">Want to Explore the Cultures of the World?</p>
                  <p className="textStyle2">Learn more about the citizens of various countries by visiting the <Link to="/ex" className="homeLink">Exhibition Hall</Link>.</p>
                </div>
              </td>
              <td className="imageBox1">
                <div className="homeImg1">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Holi_Festival_of_Colors_2013.jpg/640px-Holi_Festival_of_Colors_2013.jpg" width="100%" height="100%"/>
                </div>
              </td>
            </tr>

            <tr>
              <td className="imageBox2">
                <div className="homeImg2">
                  <img src="https://cdn.pixabay.com/photo/2016/07/06/15/29/math-1500720_1280.jpg" width="100%" height="100%"/>
                </div>
              </td>
              <td className="textBox2">
                <div className="homeText2">
                  <p className="textStyle1">Want to Test your Cultural Knowledge?</p>
                  <p className="textStyle2">Visit the <Link to="/tr" className="homeLink">Trivia Page</Link> to see how much you know about cultures around the world and maybe learn something new.</p>
                </div>
              </td>
            </tr>
          </table>
        </div>
    </>
    */
    <div className="container-fluid full-width">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p className="text-center homeTitleText">Continent Name (EDIT HERE)</p>
        </div>
      </div>

      <div className="row row-no-gutter">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p className="subHomeText homeLeft">Country Name (EDIT HERE)</p>
          <p className="desHomeText homeLeft">Country Description (EDIT HERE)</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <img src="" className="img-responsive img-right img-full-width" width="100%" height="100%"/>
        </div>
      </div>

      <div className="row row-no-gutter">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p className="subHomeText homeLeft">Country Name (EDIT HERE)</p>
          <p className="desHomeText homeLeft">Country Description (EDIT HERE)</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <img src="" className="img-responsive img-right img-full-width" width="100%" height="100%"/>
        </div>
      </div>

      <div className="row row-no-gutter">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p className="subHomeText homeLeft">Country Name (EDIT HERE)</p>
          <p className="desHomeText homeLeft">Country Description (EDIT HERE)</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <img src="" className="img-responsive img-right img-full-width" width="100%" height="100%"/>
        </div>
      </div>
    </div>
  );
}
 
export default ClothesTemplate;