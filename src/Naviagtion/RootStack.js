import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import routeNames from "./routeNames";
import colors from '../Constants/colors'
import styles from "./styles";
import CommentsScreen from "../Screens/CommentsScreen";
const Root = createNativeStackNavigator()
const RootStack = (props) => {
    return (
        <Root.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: styles.header,
                headerTintColor: 'white',
            }}
        >
            <Root.Screen
                name={routeNames.rootStack.home}
                component={HomeScreen}
                options={{
                    title: 'Hacker News'
                }} />
            <Root.Screen
                name={routeNames.rootStack.comment}
                component={CommentsScreen}
                options={{
                    title: 'Comments'
                }} />
        </Root.Navigator>
    )
}
export default RootStack;