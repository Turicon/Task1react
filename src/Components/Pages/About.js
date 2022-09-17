
import React from 'react';
import Adobe from '../Elements/Adobe';


function About() {
  let data = [
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ]
  return (
    <div>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-lg-3 col-md-12 main-product-filter mt-4" data-aos="fade-right">
            <div className="product-filter">
              <div>
                <div id="filterbar">
                  <div className='filter'>FILTER</div>
                  <div className="box">
                    <div className="border-bottom">
                      <div className="box-label d-flex align-items-center">Company Sectors </div>
                      <div className='product-search'>
                        <i className='fa fa-search'></i>  <input type='search' placeholder='Search sector' />
                      </div>
                      <div id="inner-box" className="mt-2 collapse">
                        <div className="my-2"> <label className="tick">Administartive <input type="checkbox"
                          checked="checked" /> <span className="check"></span> </label> </div>
                        <div className="my-2"> <label className="tick">Art & Design <input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">Business <input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">Consulting<input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">Customer Service & Support <input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">Handbag <input type="checkbox" checked />
                          <span className="check"></span> </label> </div>
                        <div className="my-2"> <label className="tick">Warm vest <input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">Wallets <input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className='border-bottom'>
                      <div className="box-label d-flex align-items-center">Country
                        <button className="btn ml-auto form-control" type="button" data-toggle="collapse"
                          data-target="#inner-box2" aria-expanded="false">
                          <span className="fas fa-chevron-down"></span>
                        </button>
                      </div>
                      <div id="inner-box2" className="collapse mt-2 ">
                        <div className="my-2"> <label className="tick">World Wide<input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">United States<input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">Azerbaijan<input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">Russia <input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">Turkey<input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">Italy <input type="checkbox"
                          checked="checked" /> <span className="check"></span> </label> </div>
                        <div className="my-2"> <label className="tick">England<input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">France <input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className=' border-bottom'>
                      <div className="box-label d-flex align-items-center">Metatags</div>
                      <div className='product-search'>
                        <i className='fa fa-search'></i>  <input type='search' placeholder='Search sector' />
                      </div>
                      <div id="inner-box" className="mt-2 collapse">
                        <div className="my-2"> <label className="tick">Metatag1 <input type="checkbox"
                          checked="checked" /> <span className="check"></span> </label> </div>
                        <div className="my-2"> <label className="tick">Metatag2<input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">Metatag3<input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">Metatag4<input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">Metatag4 <input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">Metatag5<input type="checkbox" checked />
                          <span className="check"></span> </label> </div>
                        <div className="my-2"> <label className="tick">Metatag6<input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">Metatag7<input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                      </div>
                    </div>
                  </div>

                  <div className="box">
                    <div className='border-bottom'>
                      <div className="box-label d-flex align-items-center">Alexa points</div>
                      <div id="inner-box" className="mt-2 collapse">
                        <div className="my-2"> <label className="tick">5 star <input type="checkbox"
                          checked="checked" /> <span className="check"></span> </label> </div>
                        <div className="my-2"> <label className="tick">4 star<input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">3 star<input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">2 star<input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">1 star <input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">Metatag5<input type="checkbox" checked />
                          <span className="check"></span> </label> </div>
                        <div className="my-2"> <label className="tick">Metatag6<input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                        <div className="my-2"> <label className="tick">Metatag7<input type="checkbox" /> <span
                          className="check"></span>
                        </label> </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 features_products" data-aos="fade-left">
            <div className='showing_result'>
              <div>Showing: 599 filtered domains</div>
              <div>Sort by :
                <select>
                  <option> Relevance </option>
                  <option>High price</option>
                  <option>Low price</option>
                  <option>Favorites</option>
                </select></div>
            </div>
            {data.map((a, index) => {
              return (
                <Adobe key={index}/>
              )
            })}

          </div>
        </div>
      </div>
    </div>
  )
}

export default About