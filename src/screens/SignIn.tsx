import { Button } from '@components/Button'
import { TextInput } from '@components/Input'
import { View, Text } from 'react-native'
import { Tag } from 'phosphor-react-native'

export const SignIn = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign In</Text>
      <View
        style={{
          width: 300,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          gap: 10,
        }}
      >
        <TextInput placeholder="Password" errorMessage="" type="password" />
        <Button
          label="Sign In"
          type="gray"
          onClick={() => {}}
          renderIcon={() => <Tag size={16} />}
        />
      </View>
    </View>
  )
}
