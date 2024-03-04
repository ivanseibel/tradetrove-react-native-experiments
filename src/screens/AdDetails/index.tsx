import { useNavigation } from '@react-navigation/native'
import * as SC from './styles'
import { ImgCarousel } from '@components/ImgCarousel'

export const AdDetails = () => {
  const navigation = useNavigation()

  const handleBackPress = () => {
    navigation.goBack()
  }

  return (
    <SC.Main>
      <SC.NavigationHeader>
        <SC.NavigationButton onPress={handleBackPress}>
          <SC.BackIcon />
        </SC.NavigationButton>
      </SC.NavigationHeader>
      <SC.Content>
        <ImgCarousel />
      </SC.Content>
    </SC.Main>
  )
}
