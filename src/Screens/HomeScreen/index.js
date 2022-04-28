import React, { useEffect, useState } from "react";
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import { perPageCount } from "../../Constants/apiConstants";
import routeNames from "../../Naviagtion/routeNames";
import { getMultipleItems, getTopStoriesList } from "../../Redux/actions/actions";
import { View } from 'react-native'
import Home from "./home.screen";
import styles from "./home.styles";

const HomeScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [list, setList] = useState(null);
    const [stories, setStories] = useState(null);
    const getData = async () => {
        try {
            if (list != null || stories != null) {
                setIsLoading(true)
            }
            const res = await getTopStoriesList()
            if (list != null || stories != null) {
                setIsLoading(false)
            }
            setList(res.storiesList)
            setStories(res.storyDetails)
            return Promise.resolve(res)
        } catch (error) {
            if (list != null || stories != null) {
                setIsLoading(false)
            }
            return Promise.reject(error)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    const getNext = async () => {
        try {
            var l = list
            setIsLoading(true)
            const res = await getMultipleItems(l.splice(0, perPageCount))
            setIsLoading(false)
            setStories(s => [...s, ...res]);
            setList(l);
            return Promise.resolve(res)
        } catch (error) {
            setIsLoading(false)
            return Promise.reject(error)
        }
    }
    const handleOnCardPress = (story) => {
        props.navigation.push(routeNames.rootStack.comment, { item:story })
    }
    if (stories == null) {
        return (
                <SkeletonContent
                    isLoading={true}
                    layout={[
                        styles.placeholderItem,
                        styles.placeholderItem,
                        styles.placeholderItem,
                        styles.placeholderItem,
                        styles.placeholderItem,
                        styles.placeholderItem,
                        styles.placeholderItem
                    ]}
                />
        )
    }
    return (
        <Home
            isLoading={isLoading}
            stories={stories}
            getNext={getNext}
            onCardPress={handleOnCardPress}
            onRefresh={getData}
            navigation={props?.navigation}
        />
    )
}
export default HomeScreen