import { Routes } from '@routes/index'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#EDECEE'}
        translucent
      />
      <Routes />
    </>
  )
}
