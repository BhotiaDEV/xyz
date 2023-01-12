import React from "react";
import "./DetailsPage.css";

const DetailsDisplay = (props) => {
  const details = ({ productdata }) => {
    if (productdata) {
      return productdata.map((item) => {
        if (item.size)
          return (
            <div id="product-info" key={item._id}>
              <div className="product-image">
                <img
                  src={item.image}
                  alt="matus-hatala-p-Fzxa-Khd-FME-unsplash"
                  border="0"
                />
                {/* <div className="image-list">
                    <img
                    src="https://i.ibb.co/N6PhS3Y/rayban-glasses.jpg"
                    alt="rayban-glasses"
                    border="0"
                    />
                    <img
                    src="https://i.ibb.co/N6PhS3Y/rayban-glasses.jpg"
                    alt="rayban-glasses"
                    border="0"
                    />
                    <img
                    src="https://i.ibb.co/N6PhS3Y/rayban-glasses.jpg"
                    alt="rayban-glasses"
                    border="0"
                    />
                </div> */}
              </div>
              <div className="product-details">
                <div className="product-brand" value={item._id}>
                  <span>{item.brand}</span>
                </div>
                <div className="product-name">{item.product_name}</div>
                <div className="product-price">
                  <span>&#8377;{item.original_price} </span>{" "}
                  <del>MRP: &#8377;{item.price}</del>
                  <span className="product-discount">
                    ({item.discount}% off)
                  </span>
                </div>
                <span className="product-rating">{item.rating} &#9733;</span>
                <span className="product-review">{item.reviews} rating</span>
                <div className="product-offers">
                  <div className="offer-header">AVAILABLE OFFERS</div>
                  {
                    // console.log(this.props)
                    item.offers.map((data) => {
                      return (
                        <div className="available-offers">
                            <div className="offer-icon"></div>
                            <div className="about-offer">
                              <div className="offer-details">{data.offer}</div>
                              <div className="offer-coupon">{data.coupon}</div>
                            </div>
                          </div>
                      );
                    })
                  }
                </div>
                <div className="product-color">
                  <div className="color-header">
                    Colour
                    <span>:{item.color}</span>
                  </div>
                  <div className="colour-image"></div>
                </div>

                <div className="product-size">
                  {item.size.map((data) => {
                    return (
                      <>
                        <div className="sizes">{data}</div>
                      </>
                    );
                  })}
                </div>
                <div className="buy-now">
                  <button>BUY NOW</button>
                </div>
                <div className="add-to-cart">
                  <button>ADD TO BAG</button>
                </div>
                <div className="seller-details">
                  <span>Sold directly by</span>
                  <span className="address">{item.seller}</span>
                </div>
                <div className="shipping-address">
                  <span>Ship To</span>
                  <input type="text" id="pincode" placeholder="Delhi,110001" />
                  <label htmlFor="pincode">Change</label>
                </div>
                <div className="additional-details"></div>
              </div>
            </div>
          );
        else
          return (
            <div id="product-info" key={item._id}>
              <div className="product-image">
                <img
                  src={item.image}
                  alt="matus-hatala-p-Fzxa-Khd-FME-unsplash"
                  border="0"
                />
                {/* <div className="image-list">
                  <img
                    src="https://i.ibb.co/N6PhS3Y/rayban-glasses.jpg"
                    alt="rayban-glasses"
                    border="0"
                  />
                  <img
                    src="https://i.ibb.co/N6PhS3Y/rayban-glasses.jpg"
                    alt="rayban-glasses"
                    border="0"
                  />
                  <img
                    src="https://i.ibb.co/N6PhS3Y/rayban-glasses.jpg"
                    alt="rayban-glasses"
                    border="0"
                  />
                </div> */}
              </div>
              <div className="product-details">
                <div className="product-brand" value={item._id}>
                  <span>{item.brand}</span>
                </div>
                <div className="product-name">{item.product_name}</div>
                <div className="product-price">
                  <span>&#8377;{item.original_price} </span>{" "}
                  <del>MRP: &#8377;{item.price}</del>
                  <span className="product-discount">
                    ({item.discount}% off)
                  </span>
                </div>
                <span className="product-rating">{item.rating} &#9733;</span>
                <span className="product-review">{item.reviews} rating</span>
                <div className="product-offers">
                  <div className="offer-header">AVAILABLE OFFERS</div>
                  {
                    // console.log(this.props)
                    item.offers.map((data) => {
                      return (
                        <>
                          <div className="available-offers">
                            <div className="offer-icon"></div>
                            <div className="about-offer">
                              <div className="offer-details">{data.offer}</div>
                              <div className="offer-coupon">{data.coupon}</div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  }
                </div>
                <div className="product-color">
                  <div className="color-header">
                    Colour
                    <span>:{item.color}</span>
                  </div>
                  <div className="colour-image"></div>
                </div>
                <div className="buy-now">
                  <button>BUY NOW</button>
                </div>
                <div className="add-to-cart">
                  <button>ADD TO BAG</button>
                </div>
                <div className="seller-details">
                  <span>Sold directly by</span>
                  <span className="address">{item.seller}</span>
                </div>
                <div className="shipping-address">
                  <span>Ship To</span>
                  <input type="text" id="pincode" placeholder="Delhi,110001" />
                  <label htmlFor="pincode">Change</label>
                </div>
                <div className="additional-details"></div>
              </div>
            </div>
          );
      });
    }
  };
  return <>{details(props)}</>;
};
export default DetailsDisplay;
