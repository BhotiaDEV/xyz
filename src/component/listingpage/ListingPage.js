import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import "./ListingPage.css";

const listingurl = "https://tatacliqapi.onrender.com/filter"

class ListingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
          productList: []
        }
    }

renderItemList(data) {
    if (data) {
      return data.map((item) => {
        return (
          <Link to={`/details/${item.id}`}>
            <div className="list-item" key={item.id}>
              <div className="item-img">
                <img
                  src={item.image}
                  alt="matus-hatala-p-Fzxa-Khd-FME-unsplash"
                  border="0"
                />
              </div>
              <div className="item-details">
                <div className="brand">{item.brand}</div>
                <div className="desc">{item.product_name}</div>
                <div className="price">
                  <span> ₹{item.price} </span>
                  <span>
                    <del> ₹{item.original_price} </del>
                  </span>
                </div>
                  {(item.rating >= 4) ? 
                  (
                <div className="rating good-rating">
                  <span>
                    {item.rating} <i className="fa-solid fa-star"></i>
                  </span>
                </div>) : 
                (<div className="rating low-rating">
                  <span>
                    {item.rating} <i className="fa-solid fa-star bad-star"></i>
                  </span>
                </div>)
                  }
                <div className="review">
                  <span>({item.review})</span>
                </div>
              </div>
            </div>
          </Link>
        );
      });
    }
    else{
      return(<><h1 style={{textAlign : "center"}} >Loading...</h1></>)
    }
  }

  handleFilter(event) {
    console.log(event.target.value);
    // this.setState({
    //   categoryList: this.state.productList.filter((item) => {
    //     return item.brand_id == event.target.value;
    //   }),
    // });
  }

  componentDidMount() {
    let category_id = this.props.match.params.category_id;
    let query = '';
    query = this.props.location.search;
    console.log(this.props.location.search)
    fetch(`${listingurl}/${category_id}${query}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ productList: data });
      }
    );
  }
  render() {
    return (
      <>
        <div id="main">
          <div className="container-fluid">
            <div id="filter">
              <div id="filter-heading">
                <span> Filter </span>
                <button>Clear All</button>
              </div>
              <div id="filter-body">
                <div className="filter-category">
                  <details
                  // onChange={(e) => {
                  //   console.log(e.value.target);
                  // }}
                  >
                    <summary>Categories</summary>
                    <div className="filter-item">
                      <input
                        type="checkbox"
                        id="item-input"
                        value="Electronics"
                      />
                      <label htmlFor="item-input">Electronics</label>
                    </div>
                    <div className="filter-item">
                      <input type="checkbox" id="item-input" value="Clothing" />
                      <label htmlFor="item-input">Clothing</label>
                    </div>
                  </details>
                  <details>
                    <summary>Brands</summary>
                    <div className="filter-item">
                      <input type="checkbox" id="women" value="Adidas" />
                      <label htmlFor="women">Adidas</label>
                    </div>
                    <div className="filter">
                      <input type="checkbox" id="men" value="Nike" />
                      <label htmlFor="men">Nike</label>
                    </div>
                    <div className="filter-item">
                      <input type="checkbox" id="kids" value="Puma" />
                      <label htmlFor="kids">Puma</label>
                    </div>
                  </details>
                  <details>
                    <summary>Product Type</summary>
                    <div className="filter-item">
                      <input
                        type="checkbox"
                        id="item-input"
                        value="Earphones"
                      />
                      <label htmlFor="item-input">Earphones</label>
                    </div>
                    <div className="filter-item">
                      <input type="checkbox" id="item-input" value="Watch" />
                      <label htmlFor="item-input">Watch</label>
                    </div>
                    <div className="filter-item">
                      <input type="checkbox" id="item-input" value="Footwear" />
                      <label htmlFor="item-input">Footwear</label>
                    </div>
                  </details>
                </div>
              </div>
            </div>
            <div id="listing">
              {this.renderItemList(this.state.productList)}
            </div>
          </div>
        </div>
      </>
    );
  }}
  export default ListingPage 