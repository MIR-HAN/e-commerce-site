import { useContext } from "react";
import { ProductContext } from "../context/productContext.jsx";
import Loader from '../components/Loader.jsx';
import Cards from '../components/Cards.jsx';




const MainPage = () => {
  //object seperation
  const { products } = useContext(ProductContext);


  return (
    <div className=' d-flex flex-wrap justify-content-center
     justify-content-md-between gap-3 gap-md- mx-md-5 my-5 mt-5 pt-5'>
      {!products ? <Loader /> : products.map((item, i) => <Cards key={item.id} product={item} />)}

    </div>
  )
}

export default MainPage;