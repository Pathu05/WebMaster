const AussieCus = () => {
  return (
    <div className="container-fluid full-width">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p className="text-center cusTitleText">Oceania</p>
        </div>
      </div>

      <div className="row row-no-gutter">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p className="cusSubText homeLeft">Vegemite</p>
          <p className="cusDesText homeLeft">Vegemite is a popular paste from Australia. Major Ingredients - Onion, Malt, Celery</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <img src="https://live.staticflickr.com/2613/3982369141_39ce445545_b.jpg" className="img-responsive img-right img-full-width" width="100%" height="100%"/>
        </div>
      </div>

      <div className="row row-no-gutter">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p className="cusSubText homeLeft">Hokey Pokey Ice Cream</p>
          <p className="cusDesText homeLeft">Hokey Pokey Ice Cream is a popular dessert from New Zealand. Major Ingredients - Milk, Baking Soda, Golden Syrup</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Honeycomb_ice_cream_and_hot_toffee_sauce_%285725734559%29.jpg" className="img-responsive img-right img-full-width" width="100%" height="100%"/>
        </div>
      </div>

      <div className="row row-no-gutter">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p className="cusSubText homeLeft">Fijian Ceviche (Kokoda)</p>
          <p className="cusDesText homeLeft">Kokoda is a popular dish from Fiji. Major Ingredients - Fish, Coconut Milk, Red Onion</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Ceviche_Chilien.jpg" className="img-responsive img-right img-full-width" width="100%" height="100%"/>
        </div>
      </div>
    </div>
  );
}
 
export default AussieCus;