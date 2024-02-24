import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './auth.route'
import { Box } from '@gluestack-ui/themed'
import { View } from 'react-native'

export const Routes = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}
