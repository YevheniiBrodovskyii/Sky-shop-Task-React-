import statusMap from "../statusMap";

function Product(props) {
  const {
    prod_id: id,
    prod_name: title,
    prod_status: status,
    prod_price: price,
    prod_oldprice: oldPrice,
  } = props;

  let oldPriceChecker = (oldPriceValue) => {
    if (oldPriceValue) {
      let oldPriceStr = oldPriceValue + " zł";
      return oldPriceStr;
    } else {
      return "";
    }
  };

  let statusChecker = (value) => {
    if (value != undefined && value != "") {
      let string = value;
      let array = string.split(",");
      for (let i = 0; i < array.length; i++) {
        array[i] = statusMap.get(array[i]);
      }

      return array.map((n) => <div className="status">{n}</div>);
    }
  };

  return (
    <div className="row">
      <div className="card">
        <div className="card-image">
          <img src="https://via.placeholder.com/150" />
          <div className="status_container">{statusChecker(status)}</div>
        </div>
        <div className="card-content">
          <span className="card-title">{title}</span>
          <hr className="card_hr" />
          <p className="card_price">{price} zł</p>
          <div className="card_price old_price">
            {oldPriceChecker(oldPrice)}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export { Product };
