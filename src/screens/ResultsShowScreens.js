import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Yelp from '../api/Yelp';

const ResultsShowScreens = ({navigation}) => {
    
    const [ result, setResult ] = useState(null);

    const id = navigation.getParam('id');
    console.log('resultados del show',result);

    const getResult = async id => {
         const response = await Yelp.get(`/${id}`);
         setResult(response.data);
    }

    useEffect(() => {
     //esto se usa para que se llama y se ejecute una sola vez la api
      getResult(id);
    },[]);
    if(!result){
        return null;
    }
    return(
        <View style={styles.view}>
            <Text style={styles.text}>{result.name}</Text>
            <FlatList 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) =>{
           return (
            <Image 
            style={styles.image}
            source={{ uri:item }}
            />
           );
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        alignSelf:'center',
        fontSize:20,
        margin:10,
        fontWeight:'bold',
        color:'white'
    },
    view:{
        flexDirection:'column',
        backgroundColor:'gray',
        flex:1
    },
    image:{
        height:200,
        width:300,
        alignSelf:'center',
        margin:5
    }
});

export default ResultsShowScreens;