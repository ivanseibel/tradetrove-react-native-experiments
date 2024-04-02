import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './auth.route'
import { AppRoutes } from './app.route'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export const Routes = () => {
  const isAuthenticated = false

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
