import { Button } from '@components/Button'
import { View } from 'react-native'

import Logo from '@assets/logo.png'

import * as SC from './styles'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.route'
import { ContentText } from '@components/ContentText'
import { VerticalSpace } from '@components/VerticalSpace'
import { InputWrapper } from '@components/Input/InputWrapper'
import { TextInput } from '@components/Input/TextInput'
import { PasswordVisibility } from '@components/Input/PasswordVisibility'

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
          <ContentText type="light">Your buying and selling space</ContentText>
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
          <ContentText type="dark">Access your account</ContentText>
          <InputWrapper errorMessage="">
            <TextInput placeholder="E-mail" keyboardType="email-address" />
          </InputWrapper>

          <InputWrapper errorMessage="">
            <TextInput placeholder="Password" secureTextEntry />
            <PasswordVisibility />
          </InputWrapper>
          <VerticalSpace height={4} />
          <Button label="Sign in" type="blue" onPress={() => {}} />
        </View>
      </SC.TopContainer>
      <SC.BottomContainer>
        <ContentText type="dark">Don't have an account? </ContentText>
        <Button label="Sign up" type="gray" onPress={handleNavigateToSignUp} />
      </SC.BottomContainer>
    </>
  )
}
