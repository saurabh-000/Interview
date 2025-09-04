import React from "react"
import { FlatList, Text, View } from "react-native"
const DATA=[
    {
        id:1,
        title:'One'
    },
    {
        id:2,
        title:'Two'
    },
    {
        id:1,
        title:'Three'
    },
    {
        id:1,
        title:'Four'
    },
    {
        id:1,
        title:'Five'
    }
]
const CodeReviewScreen=()=>{
    return(
        <FlatList
            data={DATA}
            renderItem={({item}) => <Text>{item?.title}</Text>}
            keyExtractor={(item) => item.id.toString()}
        />
        )
    }

    //1- need to desture item
    //2- missing key extractor


export default CodeReviewScreen;