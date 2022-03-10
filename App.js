import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';




export default function App() {
  const[datos, setDatos] = useState([]);
  const[isLoading, setLoad] = useState(true);

  const getPost = async()=> {
    try{
    const url ="https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url); //consumir los datos
    const json = await response.json();
    setDatos(json);
    } catch(error){
      console.error(error);

    }
    finally{
      setLoad(false);
    }

  }
useEffect(()=>{
  getPost();

}, [])

  return (
    <View style={styles.container}>

     {isLoading ? <ActivityIndicator/> : (

      <FlatList data = {datos}
      keyExtractor = {({id}, index) => id}
      renderItem = {
        ({item}) => (
          <Text>{item.title}</Text>
        )


     }
      />
     )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
