import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Cep(props){
  return (
	  
	 < >
	  <Text style={styles.texto} >CEP: {props.data.cep}</Text>
	  <Text style={styles.texto}>Logradouro: {props.data.logradouro} </Text>
	  <Text style={styles.texto}>Bairro: {props.data.bairro} </Text>
	  <Text style={styles.texto}>Localidade: {props.data.localidade}</Text>
	  <Text style={styles.texto}>UF: {props.data.uf} </Text>
	 </>
	  
  );
}

const styles = StyleSheet.create({
	texto:{
		color: '#11324D',
		fontSize: 20,
		padding: 6,
	}
});