import { Text, View } from 'react-native'
import * as SC from './styles'

type ComponentProps = {
  id: string
  name: string
  price: number
  image: string
  condition: 'new' | 'used'
  seller_avatar: string
}

export const ProductCard = ({
  condition,
  id,
  image,
  name,
  price,
  seller_avatar,
}: ComponentProps) => {
  return (
    <SC.Main>
      {/* <SC.ProductContainer> */}
      <SC.ProductImageContainer>
        <SC.ProductImage source={{ uri: image }} />
        <SC.SellerAvatar source={{ uri: seller_avatar }} />

        <SC.BadgeWrapper condition={condition}>
          <SC.ConditionBadge>{condition}</SC.ConditionBadge>
        </SC.BadgeWrapper>
      </SC.ProductImageContainer>

      <SC.ProductInfo>
        <SC.ProductName>{name}</SC.ProductName>
        <SC.ProductPriceContainer>
          <SC.ProductPriceCurrency>$</SC.ProductPriceCurrency>
          <SC.ProductPrice>
            {Math.floor(price)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
          </SC.ProductPrice>
        </SC.ProductPriceContainer>
      </SC.ProductInfo>
    </SC.Main>
  )
}
