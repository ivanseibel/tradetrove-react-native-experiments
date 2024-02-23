import { GluestackUIProvider, useTheme } from '@gluestack-ui/themed'
import { Routes } from '@routes/index'
import { config } from '@theme/gluestack-ui.config'
import { StatusBar, ActivityIndicator } from 'react-native'
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from '@expo-google-fonts/karla'
import { Loading } from '@components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading size={'large'} />
  }

  const bgColor = config.tokens.colors.gray6

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={bgColor}
        translucent
      />
      <Routes />
    </GluestackUIProvider>
  )
}
