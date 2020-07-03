import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import Yelp from "../api/Yelp";

const SearchScreens = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
     // console.log('execute');
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
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)} //Se ejecuta cuando se presiona enter
      />
      {errorMessage? <Text>{errorMessage}</Text>:null}
      <Text>Encontramos {result.length} resultados</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default SearchScreens;
