import { ScrollView, View } from 'react-native'
import * as SC from './styles'
import Logo from '@assets/logo-small.png'
import { ContentText } from '@components/ContentText'
import { TextInput } from '@components/Input'
import { Button } from '@components/Button'
import { VerticalSpace } from '@components/VerticalSpace'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from '@components/Avatar'

export const SignUp = () => {
  const navigation = useNavigation()

  const handleNavigateBack = () => {
    navigation.goBack()
  }

  return (
    <SC.MainContainer>
      <ScrollView
        style={{
          width: '100%',
          paddingBottom: 36,
        }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'space-evenly',
          }}
        >
          {/* Header */}
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <SC.Logo source={Logo} />
            <SC.Title>Welcome!</SC.Title>
            <ContentText type="black" centered>
              Create your account and use the space to buy various items and
              sell your products
            </ContentText>
          </View>

          {/* Form */}
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <Avatar />

            <TextInput
              placeholder="Name"
              keyboardType="default"
              autoCapitalize="words"
              autoCorrect={false}
              errorMessage=""
            />

            <TextInput
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              errorMessage=""
            />

            <TextInput
              placeholder="Telephone"
              keyboardType="phone-pad"
              autoCapitalize="none"
              autoCorrect={false}
              errorMessage=""
            />

            <TextInput
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoCorrect={false}
              errorMessage=""
            />

            <TextInput
              placeholder="Confirm Password"
              type="password"
              autoCapitalize="none"
              autoCorrect={false}
              errorMessage=""
            />

            <VerticalSpace height={4} />
            <Button label="Create account" type="black" onClick={() => {}} />
          </View>

          {/* Footer */}
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <ContentText type="black">Already have an account? </ContentText>
            <Button label="Sign in" type="gray" onClick={handleNavigateBack} />
          </View>
        </View>
      </ScrollView>
    </SC.MainContainer>
  )
}
