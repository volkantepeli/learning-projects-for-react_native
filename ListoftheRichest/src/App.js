import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, FlatList} from 'react-native';
import members_data from './members_data.json';
import MembersCard from './components/MembersCard/';

function App() {
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>List of the Richest</Text>
        <FlatList
          data={members_data}
          renderItem={({item}) => <MembersCard members={item}/>}
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor:'#eceff1'
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign:'center',
  }
});

export default App;