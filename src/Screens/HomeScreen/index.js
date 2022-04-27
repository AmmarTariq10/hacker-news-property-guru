import React, { useEffect, useState } from "react";
import { Text } from "react-native"
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

import Home from "./home.screen";
import styles from "./home.styles";
const HomeScreen = (props) => {
    const [data, setData] = useState(null)
    const getData = async () => {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const res = await response.json();
        setData(res)
    }
    useEffect(() => {
        getData()
    }, [])
    if (data == null) {
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
        <Home {...props} data={data} />
    )
}
export default HomeScreen