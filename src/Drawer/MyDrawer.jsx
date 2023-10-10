import { createDrawerNavigator } from '@react-navigation/drawer';
import Help from './Help';
import { Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Hello from './Links';
import MTN from './MTN';
import Vodaphone from './Vodaphone';
import Emergency from './Emergency';
import AirtelT from './AitelTigo';
import IosCall from "../components/IosCall"


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return ( 
    <Drawer.Navigator
   drawerContent={props=> <Hello {...props} />}
    initialRouteName='Home'
    
    screenOptions={{
      headerStatusBarHeight:35,
      headerTintColor:"white",
      headerStyle: {
        backgroundColor: "black",
        
        height: 100,
      },}}
    >
      {/* <Drawer.Screen name='Home' component={IosCall} /> */}
      <Drawer.Screen
     options={{
      headerRight: () => (
        <MaterialIcons style={{right: 35 }} name="report" size={35} color="red" />
    ),
  }}
      name="EMERGENCY" component={Emergency} />
      <Drawer.Screen
      options={{
        headerRight: () => (
          <Image alt='' source={require("../../assets/mtn.png")} style={{ width: 30, height: 30, right: 35 }} />
      ),
    }}
      name="MTN" component={MTN} />

      <Drawer.Screen 
      options={{
        headerRight: () => (
          <Image alt='' source={require("../../assets/mtn.png")} style={{ width: 30, height: 30, right: 35 }} />
      ),
    }}
      name="HELP" component={Help} />
      <Drawer.Screen
      options={{
        headerRight: () => (
          <Image alt='' source={require("../../assets/voda.png")} style={{ width: 30, height: 30, right: 35 }} />
      ),
    }}
      name="VODAFONE" component={Vodaphone} />

      <Drawer.Screen
      options={{
        headerRight: () => (
          <Image alt='' source={require("../../assets/tigo.png")} style={{ width: 30, height: 30, right: 35 }} />
      ),
    }}
      name="AIRTELTIGO" component={AirtelT} />
  
    </Drawer.Navigator>
  );
}
export default MyDrawer;
