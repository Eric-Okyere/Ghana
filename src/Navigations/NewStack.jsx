import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from '../Drawer/MyDrawer';
import { NativeBaseProvider, StatusBar } from "native-base";
import IosCall from "../components/IosCall"
const Stack = createStackNavigator();




function MyStack() {
  return (
   
    <NativeBaseProvider>
    <NavigationContainer>
    <Stack.Navigator
     screenOptions={{
      header: () => null,

   
    }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen

        name="drawer" component={MyDrawer} />
     <Stack.Screen name="mycall" component={IosCall} />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
   
      </Stack.Navigator> 
      </NavigationContainer>
      </NativeBaseProvider>
    
  );
}

export default MyStack;