import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'


type WrapperComponentType = {
    children: React.ReactNode
}
const WrapperComponent = (props: WrapperComponentType) => {
    return (
        <View style={{
            flex:1,
            backgroundColor:"#FFFFFF"
        }}>
            {props.children}
        </View>
    )
}

export default WrapperComponent

const styles = StyleSheet.create({})