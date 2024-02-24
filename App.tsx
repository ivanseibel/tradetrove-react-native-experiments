import { Routes } from '@routes/index'
import { StatusBar } from 'react-native'
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from '@expo-google-fonts/karla'
import { Loading } from '@components/Loading'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '@theme/index'

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading size={'large'} />
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <Routes />
    </ThemeProvider>
  )
}
