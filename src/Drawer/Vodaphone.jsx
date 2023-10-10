import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { ScrollView, Touchable, FlatList, Linking, Platform } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons} from "@expo/vector-icons";



const Voda = require("../../src/Drawer/Data/Voda.json")








const Emergency = () => {
  const [voda, setVoda] = useState([]);

  useEffect(()=>{
    setVoda(Voda)

    return()=>{
      setVoda([])
    }
  }, [])

  return (

<View style={{flex:1, backgroundColor:"black"}}>
    <FlatList  
    showsVerticalScrollIndicator={false}
    data={Voda}
    renderItem={({item})=>{

      const mynumber =()=>{
        if (Platform.OS === "ios") {
          Linking.openURL(`tel:${item.code}`)
        }
        else if (Platform.OS === "android") {
          Linking.openURL(`tel:${item.code}`)
        }
       }

      return (

        <View 
        style={MyStyle.Main}
        >
     

    <TouchableOpacity 
    style={{left:30, flexDirection:"row", marginVertical:20}}
    onPress={mynumber}
    >
        <Ionicons  name="call" size={34} color="#09e034" />
      <Text style={{fontWeight:"bold", left:20, fontSize:25, color:"white"}} >{item.name}</Text>
      
    </TouchableOpacity>

               
     
            </View>
         
        
      
      )
    }}
    keyExtractor={(item)=>item.name}
    />
</View>
  )
}

export default Emergency;

const MyStyle = StyleSheet.create({
    Main:{
     flex:1
        // marginVertical:10,
        // flexDirection:"row",
        // justifyContent:"space-between"
    },

   
   
})