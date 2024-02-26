import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './auth.route'
import { AppRoutes } from './app.route'

export const Routes = () => {
  const isAuthenticated = true

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
