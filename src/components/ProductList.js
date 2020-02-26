import React, { Component } from 'react';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from './context';
import Products from './Products';

export default class ProductList extends Component {
    state={
        products: storeProducts
    }
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                   <div className="container">
                       <Title name="our" title="products" />
                       <div className="row">
                           <ProductConsumer>
                               {value => {
                               return value.products.map(product => {
                                   return <Products key={product.id} product={product}/>
                               })  
                               }}
                           </ProductConsumer>
                       </div>
                   </div>
                </div>
            </React.Fragment>
                //<Products />
        )
    }
}
