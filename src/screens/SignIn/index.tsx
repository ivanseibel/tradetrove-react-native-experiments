import { Button } from '@components/Button'
import { TextInput } from '@components/Input'
import { View } from 'react-native'
import { Tag } from 'phosphor-react-native'

import Logo from '@assets/logo.png'

import * as SC from './styles'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.route'
import { ContentText } from '@components/ContentText'
import { VerticalSpace } from '@components/VerticalSpace'

export const SignIn = () => {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  const handleNavigateToSignUp = () => {
    navigation.navigate('signUp')
  }

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
          <VerticalSpace height={20} />
          <SC.Title>tradetrove</SC.Title>
          <ContentText type="gray">Your buying and selling space</ContentText>
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
          <ContentText type="black">Access your account</ContentText>
          <TextInput
            placeholder="E-mail"
            errorMessage=""
            keyboardType="email-address"
          />
          <TextInput placeholder="Password" errorMessage="" type="password" />
          <VerticalSpace height={4} />
          <Button label="Sign in" type="blue" onClick={() => {}} />
        </View>
      </SC.TopContainer>
      <SC.BottomContainer>
        <ContentText type="black">Don't have an account? </ContentText>
        <Button label="Sign up" type="gray" onClick={handleNavigateToSignUp} />
      </SC.BottomContainer>
    </>
  )
}
