import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContext from '../components/AppContext.js';
import { useContext } from 'react';
import MyButton from '../components/MyButton.js';

export default function DestDetailsScreen(props) {
  const myContext = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text>Destination Details {myContext.UserName}</Text>
      <Text>{myContext.UserCompany}</Text>
      <Text>Site: {myContext.SelectedSite}</Text>
      <MyButton caption="Confirm" target='Main' {...props} />
      <MyButton caption="Return to results" target='Results' {...props} />
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