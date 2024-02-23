import { GluestackUIProvider } from '@gluestack-ui/themed'
import { Routes } from '@routes/index'
import { config } from '@theme/gluestack-ui.config'
import { StatusBar, ActivityIndicator } from 'react-native'
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from '@expo-google-fonts/karla'

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  })

  if (!fontsLoaded) {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1 }} />
    )
  }

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#EDECEE'}
        translucent
      />
      <Routes />
    </GluestackUIProvider>
  )
}
