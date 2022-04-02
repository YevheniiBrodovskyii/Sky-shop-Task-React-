import { Product } from "./Product";

function Products(props) {
  const { products = [] } = props;

  return (
    <div className="products">
      {products.length ? (
        products.map((product, id) => <Product key={id} {...product} />)
      ) : (
        <h4 className="products_error">Nothing found</h4>
      )}
    </div>
  );
}

export { Products };
