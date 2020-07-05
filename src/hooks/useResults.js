import { useState, useEffect } from 'react';
import Yelp from '../api/Yelp';

export default  () => {
    const [results, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    const searchApi = async (searchTerm) => {
  
      try {
        const response = await Yelp.get("/search", {
          params: {
            limit: 50,
            term: searchTerm,
            location: "san jose"
          }
        });
        setResult(response.data.businesses);
      } catch (err) {
         setErrorMessage('¡Ups!... Algo Salio Mal');
      }
    };
  
    // llamada a serachApi cuando el componente se renderiza por primera vez
    //codigo malo se ejecutan consultas indefinidamoente, comprobar haciendo un console.log en este componente
   // searchApi('pasta')
   useEffect(() => {
     searchApi('pasta');
   },[]);

   return [searchApi, results, errorMessage];//Exportamos los valores para ser usados desdes SearchScreens
                                          // para que no se altere la logica del codigo
};