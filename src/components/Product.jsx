function Product (props) {

    const {
        prod_id: id,
        prod_name : title,
        prod_status: status,
        prod_price: price,
        prod_oldprice : oldPrice
    } = props;

    return <div className="product_item">
    <img className="product_img" src="" alt="" />
    <h3 className="product_title">{title}</h3>
    <hr />
    <div className="product_price">{price}</div>
    <div className="product_old_price">{oldPrice}</div>
    <div className="id">{id}</div>
    <div className="status">{status}</div>
    </div>

}

export {Product}