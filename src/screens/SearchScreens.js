import React, { useState } from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultsList';

const SearchScreens = () => {
  const [term, setTerm] = useState('');
  const [searchApi,results,errorMessage] = useResults();//importamos los valores exportados desde useResult
                                                       // para que no se altere la logica del codigo
  const filterResultsByPrice = (price) => {
    //price='$' o '$$' o '$$$'
    return results.filter( result => {
      return result.price === price;
    });
  };
  return (
    //El flex:1 en el view es para que el scroollView se pueda ver verticalmente en android, en ios no es necesario agregar
    <View style={{ flex:1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)} //Se ejecuta cuando se presiona enter
      />
      {errorMessage? <Text>{errorMessage}</Text>:null}
      <Text>Encontramos {results.length} resultados</Text>
      <ScrollView>
      <ResultList results={filterResultsByPrice('$')} title="Cost Effective"/>
      <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
      <ResultList results={filterResultsByPrice('$$$')} title="Big Spender!"/>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({});

export default SearchScreens;
