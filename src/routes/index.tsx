import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './auth.route'
import { Box } from '@gluestack-ui/themed'

export const Routes = () => {
  return (
    <Box flex={1} bg="$gray6">
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}
