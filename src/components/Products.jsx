import {Product} from './Product';

function Products (props) {

    const {products = []} = props;

    return (
    
    <div className="products">
        {products.length ? (
        products.map((product) => <Product key={product.prod_id} {...product} />)
        ) : (
            <h4>Nothing found</h4>
        )}
    </div>
    );

}

export {Products}