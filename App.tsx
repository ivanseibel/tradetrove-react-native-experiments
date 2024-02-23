import { GluestackUIProvider } from '@gluestack-ui/themed'
import { Routes } from '@routes/index'
import { config } from '@theme/gluestack-ui.config'
import { StatusBar } from 'react-native'

export default function App() {
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
