import { AppNavigatorRoutesProps } from '@routes/app.route'
import * as SC from './styles'
import DefaultPhoto from '@assets/default-photo.png'
import { useNavigation } from '@react-navigation/native'

type ComponentProps = {
  id: string
  name: string
  price: number
  image: string
  active?: boolean
  showSeller?: boolean
  condition: 'new' | 'used'
  seller: {
    id: string
    name: string
    avatar: string
  }
}

export const ProductCard = ({
  condition,
  id,
  image,
  name,
  price,
  showSeller = true,
  active = true,
  seller,
}: ComponentProps) => {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const userId = '999'

  const handleProductPress = () => {
    navigation.navigate('adDetails', {
      id,
      detailsType: userId === seller.id ? 'myAd' : 'ad',
    })
  }

  return (
    <SC.Main onPress={handleProductPress}>
      <SC.ProductImageContainer>
        <SC.ProductImage source={{ uri: image }} />

        {showSeller && (
          <SC.SellerAvatar
            source={seller.avatar ? { uri: seller.avatar } : DefaultPhoto}
          />
        )}

        <SC.BadgeWrapper condition={condition}>
          <SC.ConditionBadgeText>{condition}</SC.ConditionBadgeText>
        </SC.BadgeWrapper>

        {!active && (
          <SC.ProductInactiveOverlay>
            <SC.ProductInactiveText>AD INACTIVED</SC.ProductInactiveText>
          </SC.ProductInactiveOverlay>
        )}
      </SC.ProductImageContainer>

      <SC.ProductInfo>
        <SC.ProductName active={active}>{name}</SC.ProductName>
        <SC.ProductPriceContainer>
          <SC.ProductPriceCurrency active={active}>$</SC.ProductPriceCurrency>
          <SC.ProductPrice active={active}>
            {Math.floor(price)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
          </SC.ProductPrice>
        </SC.ProductPriceContainer>
      </SC.ProductInfo>
    </SC.Main>
  )
}
