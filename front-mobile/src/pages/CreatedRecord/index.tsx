import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';

const CreateRecord = () => {
    return (
        <>
        <Header/>
            <Text style={styles.text}>Hello create-record!</Text>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
      flex: 1,
      color: '#FFF',
      textAlign: 'center',
    }
  });
  

export default CreateRecord;