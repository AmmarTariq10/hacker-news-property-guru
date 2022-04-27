import React from "react";
import { Text } from "react-native"
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

import Home from "./home.screen";
const HomeScreen = (props) => {
    return (
        <SkeletonContent
            isLoading={true}
            layout={[
                { width: 220, height: 20, marginBottom: 6 }
            ]}
        >
            
        </SkeletonContent>
    )
    return (
        <Home {...props} />
    )
}
export default HomeScreen