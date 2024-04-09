import { createContext, useEffect, useState } from "react";
import api from "../utils/api";
import { useSearchParams } from "react-router-dom";


export const ProductContext = createContext();

export function ProductProvider({ children }) {
 
    const [products, setProducts] = useState();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [categories, setCategories] = useState();

    const updateProducts = (newProducts) => {
        setProducts(newProducts);
      };

    useEffect(() => {
        api.get('/products/categories')
          .then((res) => setCategories(res.data))

      }, [])

    useEffect(() => {
        const url = 
        selectedCategory === 'all'? 'products': `/products/category/${selectedCategory}`

        api.get(url)
            .then((res) => setProducts(res.data))

    }, [selectedCategory]);




    return <ProductContext.Provider value={{ products, categories, selectedCategory, setSelectedCategory, updateProducts }} > {children}  </ProductContext.Provider>
} 