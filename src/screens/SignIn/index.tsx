import { Button } from '@components/Button'
import { TextInput } from '@components/Input'
import { View } from 'react-native'
import { Tag } from 'phosphor-react-native'

import Logo from '@assets/logo.png'

import * as SC from './styles'

export const SignIn = () => {
  return (
    <>
      <SC.TopContainer>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SC.Logo source={Logo} />
          <SC.VerticalSpace height={20} />
          <SC.Title>tradetrove</SC.Title>
          <SC.Text type="gray">Your buying and selling space</SC.Text>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            gap: 14,
          }}
        >
          <SC.Text type="black">Access your account</SC.Text>
          <TextInput
            placeholder="E-mail"
            errorMessage=""
            keyboardType="email-address"
          />
          <TextInput placeholder="Password" errorMessage="" type="password" />
          <SC.VerticalSpace height={4} />
          <Button label="Sign In" type="blue" onClick={() => {}} />
        </View>
      </SC.TopContainer>
      <SC.BottomContainer>
        <SC.Text type="black">Don't have an account? </SC.Text>
        <Button label="Sign Up" type="gray" onClick={() => {}} />
      </SC.BottomContainer>
    </>
  )
}
