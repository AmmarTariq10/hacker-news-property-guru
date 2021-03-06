import React from "react"
import {
    TouchableOpacity,
    Text
} from 'react-native'
import styles from "./newsCard.styles"
const News = props => {
    const { story } = props
    const { hasReplies } = props
    const { time } = props

    return (

        <TouchableOpacity disabled={!hasReplies} onPress={props.handleOnPress} style={styles.container}>
            <Text style={styles.title}>
                {story.title}
            </Text>
            <Text style={styles.info}>
                {story?.score} points by {story?.by} {time} | {story?.descendants} comments
            </Text>
            {hasReplies && <Text style={styles.hyperLink}>
                View Comments ({story.kids?.length})
            </Text>}
        </TouchableOpacity>
    )
}
export default News