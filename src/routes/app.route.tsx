import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components/native'

import Home from '@screens/Home'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Alert, Platform, TouchableOpacity, View } from 'react-native'
import { House, SignOut, Tag } from 'phosphor-react-native'
import { MyAds } from '@screens/MyAds'
import { AdDetails } from '@screens/AdDetails'

type AppRoutes = {
  home: undefined
  myAds: undefined
  signOut: undefined
  adDetails: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export const AppRoutes: React.FC = () => {
  const { colors, fontSize } = useTheme()
  const { bottom } = useSafeAreaInsets()

  return (
    <Navigator
      safeAreaInsets={{ bottom }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.gray1,
        tabBarStyle: {
          alignItems: 'center',
          backgroundColor: colors.gray7,
          paddingTop: 30,
          paddingBottom: Platform.OS === 'ios' ? 40 : 30,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                height: 56,
                width: 76,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <House color={color} size={fontSize['2xl']} weight="regular" />
            </View>
          ),
        }}
      />
      <Screen
        name="myAds"
        component={MyAds}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                height: 56,
                width: 76,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Tag color={color} size={fontSize['2xl']} weight="regular" />
            </View>
          ),
        }}
      />

      <Screen
        name="signOut"
        component={View} // Dummy component, as we'll override the tab button
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                height: 56,
                width: 76,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SignOut
                color={colors.redlight}
                size={fontSize['2xl']}
                weight="regular"
              />
            </View>
          ),
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                // Perform sign-out logic here
                Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
                  {
                    text: 'Cancel',
                    style: 'cancel',
                  },
                  {
                    text: 'OK',
                    onPress: () => {
                      console.log('Sign Out Logic Here')
                      // signOut(); // Uncomment and use your actual sign-out method
                    },
                  },
                ])
              }}
            />
          ),
        }}
      />
      <Screen
        name="adDetails"
        component={AdDetails}
        options={{ tabBarButton: () => null, tabBarStyle: { display: 'none' } }}
      />
    </Navigator>
  )
}
