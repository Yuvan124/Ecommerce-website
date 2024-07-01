import React, { Component } from 'react';
import Nabar from './nbar';
import Carsl from './carsol';
import ProductCard from './card';
import Footer from './footer';
import Contact from './contact';
import About from './about';

import Marquee from './marquee'
import './home.css'; 

class Homee extends Component {
    constructor(props) {
        super(props);
    }

    state = {  }

    render() { 
        return ( 
            <div className='container'>
                <div className='ma'><Carsl></Carsl></div>
                <div><About></About></div>
                <div className="co">
                    <br /><br /><br /><br />
                    <h4 id="as">Product List</h4>
                    <br />
                    <div className='containerc'>            
                        <ProductCard></ProductCard>
                        
                        <div className="marquee-container">
                            <Marquee className="marquee-content"></Marquee>
                        </div>
                        <div className='footer'>
                            <Footer></Footer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Homee;
