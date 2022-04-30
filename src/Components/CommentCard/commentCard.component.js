import React from "react"
import {
    TouchableOpacity,
    Text
} from 'react-native'
import styles from "./commentCard.styles"
import moment from "moment"
const Comment = props => {
    const { comment } = props
    const { time } = props
    const { hasReplies } = props
    if (!comment.text) return null
    return (
        <TouchableOpacity testID={props.testID} disabled={!hasReplies} onPress={props.handleOnPress} style={styles.container}>
            <Text style={styles.info}>
                @{comment?.by} {time}
            </Text>
            <Text style={styles.title}>
                {comment.text}
            </Text>
            {hasReplies && <Text style={styles.hyperLink}>
                View Replies ({comment.kids?.length})
            </Text>}
        </TouchableOpacity>
    )
}
export default Comment