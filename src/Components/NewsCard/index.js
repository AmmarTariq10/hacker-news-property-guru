import React from "react"
import moment from "moment"
import News from "./newsCard.component"
const NewsCard = props => {
    const { story } = props
    const time = moment(story.time).fromNow()
    const hasReplies = story.kids && story.kids.length > 0
    const handleOnPress = () => {
        if (hasReplies) {
            props.onCardPress(story)
        }
    }
    if (!time || !story.title) return null
    return (
        <News
            time={time}
            handleOnPress={handleOnPress}
            story={story}
            hasReplies={hasReplies}
        />
    )
}
export default NewsCard