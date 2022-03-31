import React from "react";

class Filter extends React.Component {
  state = {
    type: "all",
  };

  hadleFilter = (event) => {
    this.setState({ type: event.target.dataset.type });
  };

  render() {
    return (
      <div clasName="row">
        <label>
          <input
            className="with-gap"
            name="prod-status"
            type="radio"
            data-type="all"
            onChange={this.hadleFilter}
            checked={this.state.type === "all"}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="prod-status"
            type="radio"
            data-type="recommended"
            onChange={this.hadleFilter}
            checked={this.state.type === "recommended"}
          />
          <span>Recommended</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="prod-status"
            type="radio"
            data-type="saleout"
            onChange={this.hadleFilter}
            checked={this.state.type === "saleout"}
          />
          <span>Saleout</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="prod-status"
            type="radio"
            data-type="bestseller"
            onChange={this.hadleFilter}
            checked={this.state.type === "bestseller"}
          />
          <span>Bestseller</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="prod-status"
            type="radio"
            data-type="promotion"
            onChange={this.hadleFilter}
            checked={this.state.type === "promotion"}
          />
          <span>Rromotion</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="prod-status"
            type="radio"
            data-type="new"
            onChange={this.hadleFilter}
            checked={this.state.type === "new"}
          />
          <span>New</span>
        </label>
      </div>
    );
  }
}

export { Filter };
