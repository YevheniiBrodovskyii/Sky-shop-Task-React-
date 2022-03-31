import React from "react";
import { Products } from "../Products";
import { Filter } from "../Filter";

class Main extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch("./products.json")
      .then((responce) => responce.json())
      .then((data) => this.setState({ products: Object.values(data) }));
  }

  filterProducts = (type = "all") => {
    fetch("./products.json")
      .then((responce) => responce.json())
      .then((data) => this.setState({ products: Object.values(data) }));
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
