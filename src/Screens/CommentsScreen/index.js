import React, { useEffect, useState } from "react";
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import routeNames from "../../Naviagtion/routeNames";
import { getMultipleItems } from "../../Redux/actions/actions";
import Comments from "./comments.screen";
import styles from "./comments.styles";

const CommentsScreen = (props) => {
    const item = props.route.params.item
    useEffect(()=>{
        const text = item.title ? item.title : item.text
        if(text){
            props.navigation.setOptions({
                title:text.substring(0,25)+'...'
            })
        }
    },[])
    const [isLoading, setIsLoading] = useState(false)
    const [comments, setComments] = useState(null);
    const getComments = async () => {
        try {
            if (comments != null) {
                setIsLoading(true)
            }
            const res = await getMultipleItems(item.kids)
            if (comments != null) {
                setIsLoading(false)
            }
            setComments(res);
            return Promise.resolve(res)
        } catch (error) {
            if (comments != null) {
                setIsLoading(false)
            }
            return Promise.reject(error)
        }
    }
    const handleOnCardPress = (item) => {
        if(item.kids && item.kids.length > 0){
            props.navigation.push(routeNames.rootStack.comment, { item:item })
        }
    }
    useEffect(() => {
        getComments()
    }, [])
    if (comments == null) {
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
        <Comments
            isLoading={isLoading}
            comments={comments}
            onCardPress={handleOnCardPress}
            onRefresh={getComments}
            navigation={props?.navigation}
        />
    )
}
export default CommentsScreen