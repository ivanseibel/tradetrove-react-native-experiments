import { Button } from '@components/Button'
import * as SC from './styles'
import { Plus } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.route'

export const HomeHeader = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const name = 'Ivan Seibel'

  const handleNewAd = () => {
    navigation.navigate('adForm')
  }

  return (
    <SC.Main>
      <SC.UserContainer>
        <SC.Avatar source={{ uri: 'https://github.com/ivanseibel.png' }} />
        <SC.WelcomeContainer>
          <SC.WelcomeText variant="normal">Welcome back,</SC.WelcomeText>
          <SC.WelcomeText variant="bold">{name.split(' ')[0]}!</SC.WelcomeText>
        </SC.WelcomeContainer>
      </SC.UserContainer>
      <SC.ButtonContainer>
        <Button
          label="New ad"
          type="black"
          Icon={Plus}
          iconColor="light"
          onPress={handleNewAd}
        />
      </SC.ButtonContainer>
    </SC.Main>
  )
}
