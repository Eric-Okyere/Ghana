import { View, Text, Image, StyleSheet,
    Platform, Linking, TouchableOpacity, 
} from 'react-native'
import React from 'react'
import { Center } from 'native-base'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




const PhoneCall = ({ route }) => {
    const navigation = useNavigation();
    // const item = route.params

    const phoneNumber = '*124#';

const openDialerWithCode = () => {
  const url = (Platform.OS === 'ios') ? `tel:${phoneNumber}` : `tel://${phoneNumber}`;
  Linking.openURL(url)
    .then((result) => {
      if (result) {
        console.log('Dialer opened successfully');
      } else {
        console.log('Unable to open dialer');
      }
    })
    .catch((error) => console.error(error));
};

  return (
    <View style={{backgroundColor:"black", flex:1}}>
        <View style={{top:70}} >
        <Center  >
      {/* <Text style={styles.text} >{item.name}</Text> */}
     
      <Image style={{width:240, height:130, alignSelf:"center", top:30}} alt='logo' 
       source={require("../../assets/flag.png")} />

       <View >
      
      <Text style={[{fontStyle:"italic",top:120, color:"#07ed6b", margin:20}, styles.text]} >Press Yes if you want to
     {/* <Text style={{color:"red"}} > {item.name} </Text> */}
        Or No to goabck to the options</Text>
      </View>
      </Center>

      <View style={styles.callCont}>

        <View>
    <Text style={[styles.text,{left:7, bottom:20}]}>Yes</Text>
    <View style={styles.calls} >
    <TouchableOpacity onPress={()=>openDialerWithCode()} >
    <Ionicons name="call" size={24} color="white" />
   </TouchableOpacity>
    </View>
        </View>


        <View>
    <Text style={[styles.text,{left:15, bottom:20}]}>No</Text>
    <View style={[styles.calls,{backgroundColor:"red"}]} >
        <TouchableOpacity onPress={()=>navigation.navigate("drawer")} >
    <MaterialIcons name="call-end" size={24} color="white" />
    </TouchableOpacity>
        </View>
        </View>

      </View>
      </View>
    </View>
  )
}

export default PhoneCall
 const styles = StyleSheet.create({
    calls:{
        backgroundColor:"#07ed6b", padding:15, borderRadius:30
    },
    callCont:{
        flexDirection:"row", justifyContent:"space-between", marginHorizontal:60,
        top:230
    },
    text:{
        fontSize:25,
        fontWeight:"bold",
        color:"white"
    }
 })