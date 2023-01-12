import React, { Component } from 'react';
import './Wishlist.css'

export default class Wishlist extends Component {
    constructor(){
        super();
        this.state = {

        };
    }

    render () {
        return(<React.Fragment>
                <div className='wishlist-page'>
                    <div className='wishlist-heading'>My Wishlist</div>
                    <div className='wishlist-item'>
                        <div className='wishlist-img'><img src='' alt=''></img></div>
                        <div className='wishlist-details'>
                            <div className='wishlist-name'>SOLEPLAY by Westside Black Knitted Lace-Up Sneakers</div>
                            <div className='wishlist-price'>₹1499</div>
                        </div>
                        <div className='delete-btn'><i class="fa-solid fa-trash-can"></i></div>
                        <div className='add-to-cart'><div className='add-to-cart-btn'>ADD TO CART</div></div>
                    </div>
                    <div className='wishlist-item'>
                        <div className='wishlist-img'><img src='' alt=''></img></div>
                        <div className='wishlist-details'>
                            <div className='wishlist-name'>SOLEPLAY by Westside Black Knitted Lace-Up Sneakers</div>
                            <div className='wishlist-price'>₹1499</div>
                        </div>
                        <div className='delete-btn'><i class="fa-solid fa-trash-can"></i></div>
                        <div className='add-to-cart'><div className='add-to-cart-btn'>ADD TO CART</div></div>
                    </div>
                    <div className='user-data'>
                        <div className='user-details'>
                            <div className='user-image'></div>
                            <div className='user-email'>xyz@gmail.com</div>
                            <div className='user-phone'>123456789</div>
                        </div>
                        <div className='user-address'>
                            <div className='address-head'>Default Address</div>
                            <div className='address-body'>My home address, Joshimath , Uttrakhand <br/>ph :123456789</div>
                            <div className='address-change'>Change &rarr;</div>
                        </div>
                    </div>
                </div>
        </React.Fragment>);
    }
}