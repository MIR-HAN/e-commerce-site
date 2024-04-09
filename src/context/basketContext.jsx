import { useLocalStorage } from "@uidotdev/usehooks";
import { toast } from "react-toastify";
import { createContext, useState } from "react";


export const BasketContext = createContext();


export const BasketProvider = ({ children }) => {

    const [basket, setBasket] = useLocalStorage('basket', []);

    const addTobasket = (newProduct) => {

        const found = basket.find((i) => i.id === newProduct.id);

        if (found) {
            const updated = { ...found, amount: found.amount + 1 }

            const newBasket = basket.map((i) => i.id === updated.id ? updated : i)
            setBasket(newBasket)
            toast.success(`product added to basket (${updated.amount})`)
        } else {
            setBasket(basket.concat({ ...newProduct, amount: 1 }));
            toast.success(`product added to basket`)
        }

    };


    const removeFromBasket = (delete_id) => {

        const filtered = basket.filter((i) => i.id !== delete_id)
        setBasket(filtered);
        toast.success(`product removed from basket`)

    };

    const decreaseAmount = (delete_id) => {

        const found = basket.find((i) => i.id == delete_id);

        if (found.amount > 1) {
            const updated = { ...found, amount: found.amount - 1 };
            const newBasket = basket.map((i) => (i.id === updated.id ?
                updated : i))

            setBasket(newBasket)
        } else {
            removeFromBasket(delete_id);
        }
    }

    return <BasketContext.Provider value={{ basket, addTobasket, removeFromBasket, decreaseAmount }}>{children}</BasketContext.Provider>
};