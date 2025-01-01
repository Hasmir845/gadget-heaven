import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_image, product_title, price, product_id } = product;
  return (
    <div className="">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={product_image}
            alt="image"
            className="rounded-xl h-56"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: {price} tk</p>
          <div className="card-actions">
            <Link to={`/viewDetails/${product_id}`}><button className="btn btn-primary">View Details </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
