

import { FlatList, Image, StyleSheet,  View } from 'react-native'
import React, { useRef, useState } from 'react'
import { imageData } from '../constants/constants';
import { windowWidth, windowHeight } from '../constants/config';


const ImageCrouselComponet = ({ item }) => {

    return (
        <View style={styles.image2}>
            <Image
                style={styles.Image1}
                source={item.image}
            />
        </View>
    )
}

const ImageCrousel = () => {
    const [CurrentIndex, setCurrentIndex] = useState([])
    const flatListRef = useRef(null);
    const scrollEnd = (event) => {
        const contentOffset = event.nativeEvent.contentOffset.x;
        console.log(contentOffset, "contentoffset")
        const Index = Math.floor(contentOffset / windowWidth);
        setCurrentIndex(Index);
    }

    const dotsLogic = () => {
        return imageData.map((_, index) => (
            <View
                key={index}
                style={[styles.dot, { backgroundColor: index === CurrentIndex ? '#FFB83A' : '#C4C4C4' }]}//what this line 
            />

        ))
    }
    return (
        <>
            <FlatList
                ref={flatListRef}
                data={imageData}
                renderItem={ImageCrouselComponet}
                pagingEnabled={true}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={scrollEnd} ß
            />


            <View style={styles.dotsContainer}>
                {dotsLogic()}
            </View>
        </>
    )
}

export default ImageCrousel

const styles = StyleSheet.create({
    image2: {
        width: windowWidth,//change is here
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',



    },
    Image1: {
        height: windowHeight * 0.50,
        width: windowWidth * 0.92,
        borderRadius: 10,

    },
    dotsContainer: {
        flexDirection: 'row',
        padding: 7,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth * 0.9
    },
    dot: {
        width: 8,
        height: 8,
        border: 1,
        borderRadius: 4,
        marginHorizontal: 3,
    }
})