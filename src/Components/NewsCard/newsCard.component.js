import React from "react"
import {
    View,
    Text
} from 'react-native'
const News = props => {
    return (
        <View>
            <Text>{JSON.stringify(props.details)}</Text>
        </View>
    )
}
export default News