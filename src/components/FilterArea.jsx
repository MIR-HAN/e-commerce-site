import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import api from '../utils/api';
import { ProductContext } from '../context/productContext';


const FilterArea = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const { updateProducts  } = useContext(ProductContext);
    
    
    const query = searchParams.get('aramaTerimi');

    // form gönderilince
    const handleSubmit = (e) => {
      // sayfa yenilemyi engelle
      e.preventDefault();
  
      // aratılan terimi arama parametresi olarak ekle
      searchParams.set('aramaTerimi', e.target[0].value);
  
      // url'i güncelle
      setSearchParams(searchParams);
      
    };

    useEffect(() => {
        if (query) {
          api.get(`/products/category/${query}`)
            .then((res) => {
              updateProducts(res.data); // Update products state in ProductContext
            })
            .catch((error) => {
              console.error('Error fetching filtered data:', error);
              updateProducts([]); // Reset products state in case of error
            });
        } else {
          updateProducts([]); // Reset products state if query is empty
        }
      }, [query,]);
    

  return (

<form onSubmit={handleSubmit} className="d-flex mt-3" >
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-warning" type="submit">Search</button>
            </form>

  )
}

export default FilterArea