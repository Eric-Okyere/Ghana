import { Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons} from "@expo/vector-icons";
import call from 'react-native-phone-call'
const Article = () => {

       const openDial =()=>{
        const args = {
          number: '0247747624',
          prompt: false, 
          skipCanOpen: true 
        }
        call(args).catch(console.error)
       }
  

  return (
    <View>
      <Text style={styles.text} >
        If you face any challenge. Please contact me </Text>
    <TouchableOpacity 
    style={{alignItems:"center"}}
    onPress={openDial}
    >
      <Ionicons style={{top:50}} name="call" size={34} color="#09e034" />
    </TouchableOpacity>
    </View>
  )
}

export default Article

const styles = StyleSheet.create({
  text:{fontWeight:"bold", fontSize:20, paddingTop:70, margin:20, alignSelf:"center"}
})