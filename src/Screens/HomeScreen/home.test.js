import React from "react";
import { render } from "@testing-library/react-native";
import HomeScreen from './'
import { NavigationContainer } from "@react-navigation/native";
describe('HomeScreen renders correctly', () => {
    it('renders correctly', () => {
        const renderedComponent = render(
            <HomeScreen />
        );
    })
})