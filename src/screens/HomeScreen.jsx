import { StyleSheet, Text,  } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons, MaterialIcons, MaterialCommunityIcons} from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/native'
import {Box, View, Heading, Image, Pressable, VStack, Input, Button } from 'native-base';

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
<Box style={{backgroundColor:"black"}} flex={1}>
      

  <Box 
  w="full"
  h="full"
  position="absolute"
  top="25%"
  px="6"
    justifyContent="center"
  >
    <VStack bottom={330} style={{alignSelf:"center"}} >
      <Text style={{fontSize:30,fontWeight:"bold", color:"white", bottom:30}} >GHANA NETWORKS</Text>
      <Image style={{width:240, height:130, alignSelf:"center"}} alt='logo'  source={require("../../assets/flag.png")} />
      <Text style={{fontSize:30, alignSelf:"center", top:120, fontStyle:"italic", fontWeight:"bold", color:"white"}} >AKWABA</Text>
    </VStack>

 <TouchableOpacity style={styles.but} onPressIn={()=>navigation.navigate("drawer")} >
  <Text style={{color:"black", fontSize:20, alignSelf:"center", top:10}}>Explore</Text>
 </TouchableOpacity>
    
      
  </Box>
    </Box>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    main:{
        backgroundColor:"green", flex:1, alignContent:"center"
    },
   text: {bottom:170, alignSelf:"center", backgroundColor:"black", color:"white", padding:15, borderRadius:50, fontSize:25}
   , but:{
      backgroundColor:"white", width:100, height:50, borderRadius:70, alignSelf:"center", bottom:100
    }
    
  })

