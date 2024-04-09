import { useContext } from "react";
import { BasketContext } from "../context/basketContext";


const Cards = ({ product }) => {

    const { addTobasket } = useContext(BasketContext)

    return (

        <div className="card py-2" style={{ width: '250px' }}>
            <div className="d-flex justify-content-center">
                <img src={product.image} height={120} className="abject-fit-contain" />
            </div>

            <div className="card-body">
                <h4 className="text-truncate">{product.title}</h4>
                <p>{product.price}</p>
                <p>{product.category}</p>
                <button onClick={() => addTobasket(product)} className="w-100 rounded">Add Basket</button>
            </div>
        </div>
    )
}

export default Cards;