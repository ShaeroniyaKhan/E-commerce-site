import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import SplashScreen from "./src/screens/splash/index";
import SignInScreen from "./src/screens/SignIn/Signin";

const stack = createNativeStackNavigator();
const App =() => {
  return (<>
  <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name ={'Splash'} 
      component={SplashScreen}
      options={{headerShown: false}}
      />
      <stack.Screen name ={'SignIn'}
      component= {SignInScreen}
     options={{headerShown: false}} />
    </stack.Navigator>
  </NavigationContainer>
  </>
  );
};

export default App;