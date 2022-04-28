import React from "react";
import { View, FlatList, RefreshControl } from "react-native";
import SkeletonContent from "react-native-skeleton-content-nonexpo";
import NewsCard from "../../Components/NewsCard";
import styles from "./home.styles";

const Home = (props) => {
    const { stories } = props;
    const handleOnEndReach = () => {
        props?.getNext()
    }
    const renderStory = ({ item }) => {
        return (
            <NewsCard
                story={item}
                onCardPress={props.onCardPress}
            />
        )
    }
    const renderFooter = () => {
        if (props.isLoading) {
            return (
                <SkeletonContent
                    isLoading={true}
                    layout={[
                        [styles.placeholderItem, { width: '100%' }],

                    ]}
                />
            )
        }
        return null
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
                data={stories}
                renderItem={renderStory}
                onEndReached={handleOnEndReach}
                ListFooterComponent={renderFooter}
            />
        </View>
    )
}
export default Home