import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const UserAccount = () => {
    const navigation = useNavigation();
  return (
    <View style={{ flex:1}} >
        <View style={styles.headercont} >
      <Text style={styles.header} >
        CHOOSE YOUR NETWORK</Text>
      </View>
        <View style={{flex:0.5, backgroundColor:"white"}} >
      <TouchableOpacity 
       onPress={()=>navigation.navigate("EMERGENCY")}
      style={styles.button} >
    <MaterialCommunityIcons name="car-emergency" size={44} color="red" />
      <Text style={[styles.text, {}]} >EMERGENCY</Text>
      </TouchableOpacity>

      <TouchableOpacity 
       onPress={()=>navigation.navigate("MTN")}
      style={[styles.button, {top:50}]} >
      <Image style={styles.img} source={require("../../assets/mtn.png")} />
      <Text style={styles.text} >MTN</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      onPress={()=>navigation.navigate("VODAFONE")}
      style={[styles.button, {top:70}]}>
      <Image style={styles.img} source={require("../../assets/voda.png")} />
      <Text style={styles.text} >VODAPHONE</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>navigation.navigate("AIRTELTIGO")}
      style={[styles.button, {top:90}]} >
     <Image style={styles.img} source={require("../../assets/tigo.png")} />
      <Text style={styles.text} >AIRTELTIGO</Text>
      </TouchableOpacity>

   
      </View>
        <View style={{flex:0.2, backgroundColor:"black"}} >
        <TouchableOpacity 
      onPress={()=>navigation.navigate("HELP")}
      style={[styles.button, {top:70}]} >
     <Entypo name="help-with-circle" style={{top:5}} size={34} color="white" />
      <Text style={[styles.text,{color:"white"}]} >Help</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default UserAccount

const styles = StyleSheet.create({
    button:{top:30, left:30, flexDirection:"row"},
    text:{margin:5, fontWeight:"bold", color:"black", 
    left:20, fontSize:17, top:7},
    img:{
      width:60, height:50
    },
    headercont:{flex:0.3, backgroundColor:"black"},
    header:{top:90, left:20, fontSize:18, color:"white", fontWeight:"bold"}
})