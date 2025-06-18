import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { Suspense } from 'react'
import WrapperComponent from '../WrapperComponent'


const LazyImage=React.lazy(()=>import('./MyImage'))
const CD = () => {
  return (
  <WrapperComponent>
     <Suspense fallback={<ActivityIndicator size="large" color="#0000ff"/>}>
      <LazyImage />
     </Suspense>
  </WrapperComponent>
  )
}

export default CD

const styles = StyleSheet.create({})