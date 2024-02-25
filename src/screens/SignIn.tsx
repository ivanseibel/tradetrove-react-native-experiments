import { TextInput } from '@components/Input'
import { View, Text } from 'react-native'

export const SignIn = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign In</Text>
      <View
        style={{
          width: 300,
          // borderWidth: 1,
          // borderColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <TextInput placeholder="Email" errorMessage="" />
      </View>
    </View>
  )
}
