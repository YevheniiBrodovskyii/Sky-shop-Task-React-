import React from "react";
import { Products } from "../Products";
import { Filter } from "../Filter";
import { Product } from "../Product";

class Main extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch("./products.json")
      .then((responce) => responce.json())
      .then((data) => this.setState({ products: Object.values(data) }));
  }

  productFilter = (type = "all") => {
    const selected = [];
    return this.state.products.map((product) => {
      if (product.prod_status.contains(type)) {
        selected.push(product);
      }
    });
  };

  render() {
    const { products } = this.state;

    return (
      <main className="container content">
        <Filter />
        <Products products={products} />
      </main>
    );
  }
}

export { Main };
