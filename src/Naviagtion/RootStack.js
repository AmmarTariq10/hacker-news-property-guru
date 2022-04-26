import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import routeNames from "./routeNames";
const Root = createNativeStackNavigator()
const RootStack = () => {
    return (
        <Root.Navigator>
            <Root.Screen name={routeNames.rootStack.home} component={HomeScreen} />
        </Root.Navigator>
    )
}
export default RootStack;