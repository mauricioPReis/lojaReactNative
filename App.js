import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, 
  TouchableOpacity, Modal, TextInput, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Produtos from './src/components/Produtos';


import * as Animatable from 'react-native-animatable';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {

  const [door, setDoor] = useState(false);
  const [input, setInput] = useState('');
  const [image, setImage] = useState(false);
  const [link, setLink] = useState('');
  const [descript, setDescript] = useState('');
  


  function verify(){
    if (input === '') {alert('Insira um nome válido!'); return;};

    setDoor(true);
  }
  function one(){
    setImage(true);
    setLink(require('./src/images/prod1.jpg'));
    setDescript('R$ 199.99 || Adorno em Ouro, pingente Família 4 integrantes');
  }
  function two(){
    setImage(true);
    setLink(require('./src/images/prod2.jpg'));
    setDescript('R$ 799.99 ||Adorno em Obsidiana, pingente Yin e Yang');
  }
  function three(){
    setImage(true);
    setLink(require('./src/images/prod3.jpg'));
    setDescript('R$ 99.99 ||Adorno em Ouro, pingente de Leopardo');
  }
  function four(){
    setImage(true);
    setLink(require('./src/images/prod4.jpg'));
    setDescript('R$ 209.99 ||Adorno em Cobre, pingente Estrela de David');
  }
  function five(){
    setImage(true);
    setLink(require('./src/images/prod5.jpg'));
    setDescript('R$ 159.99 ||Adorno em Ouro, edição Cavalgada');
  }
  function liu(){
    setImage(true);
    setLink(require('./src/images/prod6.jpg'));
    setDescript('R$ 499.99 ||Adorno em Ouro, edição Gamer - Pingente Olho da Verdade');
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#171d31' barStyle='light-content' />

      <Animatable.View animation="fadeInUp" useNativeDriver>
        <Text style={styles.title}>Loja do Antonio Neto</Text>
        
        <TextInput 
        placeholder='Usuário'
        placeholderTextColor='#747474'
        value={input}
        style={styles.input}
        onChangeText={ (texto) => setInput(texto) }
        />

          <TouchableOpacity onPress={verify} style={styles.head}>
            <Ionicons style={{marginLeft: 5, marginRight: 5}}name="md-enter" size={40} color="#DDD" />
            <Text style={{color: "#DDD"}}>Entrar</Text>
          </TouchableOpacity>

      </Animatable.View>

     <Modal animationtype='bounceInUp' transparent={false} visible={door} >
       <SafeAreaView style={styles.container}>
        
           <Text style={styles.title}>Loja do Antonio Neto</Text>
           <Text style={styles.subtitle}> Bem vindo: {input} </Text>
         
         <View style={styles.images}>
         <TouchableOpacity onPress={one}><Image  source={require('./src/images/prod1.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
         <TouchableOpacity onPress={two}><Image  source={require('./src/images/prod2.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
         <TouchableOpacity onPress={three}><Image  source={require('./src/images/prod3.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
         <TouchableOpacity onPress={four}><Image  source={require('./src/images/prod4.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
         <TouchableOpacity onPress={five}><Image  source={require('./src/images/prod5.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
         <TouchableOpacity onPress={liu}><Image  source={require('./src/images/prod6.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
          </View>
            
       </SafeAreaView>
     </Modal>

     <Modal animationtype='bounceInUp' transparent={false} visible={image} style={{backgroundColor: '#000'}}>
       
       <TouchableOpacity onPress={ () => setImage(false) }>
         <Ionicons style={{marginLeft: 5, marginRight: 5}}name="md-arrow-back" size={40} color="#DDD" />
       </TouchableOpacity>
       <Image source={link} style={styles.into} />
       <Text style={{textAlign:'center'}}>{descript}</Text>
       
      
     </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  images:{
    height: 460,
    width: 320,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#000',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 7,
    padding: 2,
  },
  into:{
    height: 460,
    width: 320,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#000',
    alignSelf: 'center',
    borderRadius: 7,
    padding: 2,
    textAlign: 'center',

  },
  input:{
    fontSize:15,
    marginLeft:10,
    marginRight:10,
    marginTop:30,
    backgroundColor:'#FFF',
    padding:9,
    height: 45,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 5,
  },
  container:{
    flex:1,
    backgroundColor: "#000"
  },
  title:{
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#DDD'
  },
  subtitle:{
    marginTop:10,
    paddingBottom: 10,
    fontSize: 15,
    textAlign: 'center',
    color: '#DDD',
  },
  enter:{
    color: '#FFF',
    fontSize: 20,
    marginLeft: 15,
    alignItems: 'center',
    alignSelf: 'center',
  },
  head:{
    marginLeft:10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#FFF',
    alignSelf: 'center',
  }
})


