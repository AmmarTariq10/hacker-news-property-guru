import React from "react";
import { View, FlatList, Text } from "react-native";
import NewsCard from "../../Components/NewsCard";
import styles from "./home.styles";

const Home = (props) => {
    const { data } = props;
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <NewsCard itemID={item}/>
                    )
                }}
            />
        </View>
    )
}
export default Home