import React from "react";
import { Products } from "../Products";
import { Filter } from "../Filter";

class Main extends React.Component {
  state = {
    products: [],
    filteredProducts: [],
    status: "all",
  };

  onFilterStatusChange = (status) => {
    this.setState({ status });
  };

  componentDidMount() {
    fetch("./products.json")
      .then((responce) => responce.json())
      .then((data) => this.setState({ products: Object.values(data) }));
  }

  filterProducts() {
    this.setState(({ status }) => ({
      filteredProducts:
        status === "all"
          ? this.state.products
          : this.state.products.filter((n) => n.prod_status?.includes(status)),
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.status !== prevState.status ||
      this.state.products !== prevState.products
    ) {
      this.filterProducts();
    }
  }

  render() {
    return (
      <main className="container content">
        <Filter
          values={[
            "all",
            "recommended",
            "promotion",
            "saleout",
            "bestseller",
            "new",
          ]}
          value={this.state.status}
          onChange={this.onFilterStatusChange}
        />
        <Products products={this.state.filteredProducts} />
      </main>
    );
  }
}

export { Main };
