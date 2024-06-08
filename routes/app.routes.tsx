import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "../screens/Home";
import ImageView from "../screens/Image";
import FieldsView from "../screens/FiedsView";

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name="ImageView"
          component={ImageView}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen 
          name="FieldsView"
          component={FieldsView}
          options={{ animation: "slide_from_right" }}
        />
      </Stack.Navigator>
  );
}

export default AppRoutes;
