import React from "react";
import { View, FlatList, RefreshControl } from "react-native";
import SkeletonContent from "react-native-skeleton-content-nonexpo";
import CommentCard from "../../Components/CommentCard";
import NewsCard from "../../Components/NewsCard";
import styles from "./comments.styles";

const Comments = (props) => {
    const { comments } = props;
    const renderStory = ({ item }) => {
        return (
            <CommentCard comment={item} onCardPress={props.onCardPress}/>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={props.isLoading}
                        onRefresh={props.onRefresh}
                    />
                }
                data={comments}
                renderItem={renderStory}
            />
        </View>
    )
}
export default Comments