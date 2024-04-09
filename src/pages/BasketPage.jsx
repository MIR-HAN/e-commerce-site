import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import { Link } from "react-router-dom";
import BasketItem from "../components/BasketItem";



const BasketPage = () => {

  const { basket, } = useContext(BasketContext);

  const totalAmount =basket.reduce((total, i) => total + i.amount, 0)
  const totalPrice =basket.reduce((total, i) => total + i.amount * i.price, 0)

  return (
    <div className="mt-5 pt-5 p-2 ">
      <h1>Basket</h1>

      <div className="row g-3 ">
        <div className="col-lg-8">
          <div>
            {basket.length === 0 ? (
              <div>
                <p>Add product</p>
                <Link className="btn btn-primary" to='/' >See The Products</Link>
              </div>
            ) : (
              basket.map((product) => <BasketItem key={product.id} product={product} />)
            )}
          </div>
        </div>

        <div className=" d-flex flex-column gap-4 col-lg-4 bg-dark p-5">
          <h4>Total Product Amount: <span className="text-warning rounded">{totalAmount}</span></h4>
          <h4>Total Amount: <span className="text-warning rounded"> ${totalPrice}</span></h4>
          <form className="d-flex mt-4 ">
            <input className="form-control "  placeholder='add promo code..'/>
            <button className="btn btn-warning" >Apply</button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default BasketPage;