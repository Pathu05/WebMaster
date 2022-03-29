const NAmerCus = () => {
  return (
    <div className="container-fluid full-width">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p className="text-center cusTitleText">North America</p>
        </div>
      </div>

      <div className="row row-no-gutter">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p className="cusSubText homeLeft">Apple Pie</p>
          <p className="cusDesText homeLeft">The Apple Pie is a popular pastry from the USA. Major Ingredients - Apples, Flour, Eggs</p>
          <p className="sourceHomeText homeLeft">Sources - Food Network</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_pie.jpg" className="img-responsive img-right img-full-width" width="100%" height="100%"/>
        </div>
      </div>

      <div className="row row-no-gutter">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p className="cusSubText homeLeft">Chilaquiles</p>
          <p className="cusDesText homeLeft">Chilaquiles is a popular dish from Mexico. Major Ingredients - Corn Tortillas, Salsa, Cheese</p>
          <p className="sourceHomeText homeLeft">Sources - Simply Recipes</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Portada-chilaquiles-rojos.jpg" className="img-responsive img-right img-full-width" width="100%" height="100%"/>
        </div>
      </div>

      <div className="row row-no-gutter">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p className="cusSubText homeLeft">Tourtière</p>
          <p className="cusDesText homeLeft">Tourtière is a popular meat pie from Canada. Major Ingredients - Flour, Potato, Pork, Beef</p>
          <p className="sourceHomeText homeLeft">Sources - Allrecipes</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Tourtiere_cross_section_%28cropped%29.jpg" className="img-responsive img-right img-full-width" width="100%" height="100%"/>
        </div>
      </div>
    </div>
  );
}
 
export default NAmerCus;