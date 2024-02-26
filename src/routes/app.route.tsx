import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import Home from '@screens/Home'

type AppRoutes = {
  home: undefined
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>

const Stack = createNativeStackNavigator<AppRoutes>()

export const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  )
}
