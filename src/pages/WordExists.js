import React, { View, Text } from "react";
import { useLocation } from "react-router-dom";



const WordsExists = ( props ) => {

    const location = useLocation();
    console.log("location", location);

    return (

        <View>
            <Text>WordExists</Text>
        </View>
    )
}

export default WordsExists;