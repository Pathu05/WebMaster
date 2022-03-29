const EuroCus = () => {
  return (
    <div className="container-fluid full-width">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p className="text-center cusTitleText">Europe</p>
        </div>
      </div>

      <div className="row row-no-gutter">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p className="cusSubText homeLeft">Paella</p>
          <p className="cusDesText homeLeft">Paella is a popular dish from Spain. Major Ingredients - Shrimp, Clams, Peas, Bell Peppers</p>
          <p className="sourceHomeText homeLeft">Sources - Simply Recipes</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Homemade_Paella_with_lots_of_seafood.jpg" className="img-responsive img-right img-full-width" width="100%" height="100%"/>
        </div>
      </div>

      <div className="row row-no-gutter">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p className="cusSubText homeLeft">Käsespätzle</p>
          <p className="cusDesText homeLeft">Käsespätzle is a popular dish from Germany. Major Ingredients - Flour, Cheese, Onions</p>
          <p className="sourceHomeText homeLeft">Sources - Allrecipes</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/2015_0718_K%C3%A4sesp%C3%A4tzle_S%C3%B6lden.jpg" className="img-responsive img-right img-full-width" width="100%" height="100%"/>
        </div>
      </div>

      <div className="row row-no-gutter">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p className="cusSubText homeLeft">Pinnekjøtt</p>
          <p className="cusDesText homeLeft">Pinnekjøtt is a popular dish from Norway. Major Ingredients - Lamb Ribs, Butter, Water</p>
          <p className="sourceHomeText homeLeft">Sources - North Wild Kitchen</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Pinnekj%C3%B8tt_%281%29.jpg" className="img-responsive img-right img-full-width" width="100%" height="100%"/>
        </div>
      </div>
    </div>
  );
}
 
export default EuroCus;