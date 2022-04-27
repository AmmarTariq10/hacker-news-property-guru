import React, { useEffect, useState } from "react"
import VisibilitySensor from "@svanboxel/visibility-sensor-react-native"
import {
    View
} from 'react-native'
import News from "./newsCard.component"
import styles from "./newsCard.styles"
import SkeletonContent from "react-native-skeleton-content-nonexpo"
const NewsCard = props => {
    const [details, setDetails] = useState(null)
    const getDetails = async () => {
        try {
            alert('asd')
            const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${props.itemID}.json`)
            const response = await res.json()
            setDetails(response)
        } catch (error) {
        }
    }
    return (
        <VisibilitySensor
            onChange={(isVisible) => {
                if (isVisible == true) {
                    getDetails()
                }
            }}>
            <View style={styles.container}>
                {
                    details != null ? <News {...props} details={details} /> : <SkeletonContent
                        isLoading={true}
                        layout={[
                            styles.placeholderItem
                        ]}
                    />
                }
            </View>
        </VisibilitySensor>
    )
}
export default NewsCard