import { useContext } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { BasketContext } from "../context/basketContext";


const BasketItem = ({ product }) => {

    const { decrementAmount, addTobasket, decreaseAmount, removeFromBasket } = useContext(BasketContext)
    return (

        <div className="bg-black border-bottom align-items-center gap-3 gap-md-4 rounded p-2 p-md-4 d-flex">

            <div className="border bg-white rounded-3">
                <img className="object-fit-contain"
                    height={80} width={80} src={product.image} />
            </div>
            <div>
                <p className=" fw-boldtext-truncate">
                    {product.title.length > 20 ? product.title.slice(0, 20) + "..."
                        : product.title}</p>
                <p> Category: {product.category}</p>
                <p> Raiting: {product.rating.rate}</p>
            </div>

            <div className="d-flex gap-4 align-items-center flex-column-reverse flex-md-row flex-grow-1">
                <div className="bg-dark rounded-5 d-flex gap-4
                 align-items-center  btn-wrapper ">
                    <button onClick={() => decreaseAmount(product.id)}>-</button>
                    <span>{product.amount}</span>
                    <button onClick={() => addTobasket(product)}>+</button>
                </div>

                <h4 className="flex-grow-1">${(product.price * product.amount).toFixed(2)}</h4>
                <button onClick={() => removeFromBasket(product.id)} className="rounded bg-danger d-none d-md-block"><FaRegTrashCan />
                </button>
            </div>
        </div>

    )
}

export default BasketItem