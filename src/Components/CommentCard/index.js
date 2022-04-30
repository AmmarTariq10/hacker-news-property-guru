import React from "react"
import moment from "moment"
import Comment from "./commentCard.component"
const CommentCard = props => {
    const { comment } = props
    const time = moment(comment?.time).fromNow()
    const hasReplies = comment.kids && comment.kids.length > 0

    const handleOnPress = () => {
        props.onCardPress(comment)
    }
    if (!comment.text) return null
    return (
        <Comment
            testID="comment-card"
            comment={comment}
            time={time}
            hasReplies={hasReplies}
            handleOnPress={handleOnPress}
        />
    )
}
export default CommentCard