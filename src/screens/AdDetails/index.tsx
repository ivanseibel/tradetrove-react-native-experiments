import { useNavigation } from '@react-navigation/native'
import * as SC from './styles'
import { ImgCarousel } from '@components/ImgCarousel'
import {
  Money,
  CreditCard,
  Bank,
  PaypalLogo,
  CurrencyBtc,
  Icon,
  WhatsappLogo,
} from 'phosphor-react-native'
import { FlatList } from 'react-native'
import { Button } from '@components/Button'

type PaymentItem = {
  Icon: Icon
  title: string
}

const paymentMethods: PaymentItem[] = [
  { Icon: Money, title: 'Cash' },
  { Icon: CreditCard, title: 'Credit Card' },
  { Icon: CreditCard, title: 'Debit Card' },
  { Icon: Bank, title: 'Bank Transfer' },
  { Icon: PaypalLogo, title: 'Paypal' },
  { Icon: CurrencyBtc, title: 'Bitcoin' },
]

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
      <ImgCarousel />
      <SC.Content>
        <SC.SellerInfo>
          <SC.SellerAvatar
            source={{ uri: 'https://github.com/ivanseibel.png' }}
          />
          <SC.SellerName>John Doe</SC.SellerName>
        </SC.SellerInfo>

        <SC.ProductDetails>
          <SC.BadgeWrapper>
            <SC.BadgeText>New</SC.BadgeText>
          </SC.BadgeWrapper>

          <SC.ProductTitleAndPrice>
            <SC.ProductTitle>Lorem ipsum dolor sit amet</SC.ProductTitle>
            <SC.CurrencyAndPrice>
              <SC.Currency size="md">EUR</SC.Currency>
              <SC.Price size="md">1,000.00</SC.Price>
            </SC.CurrencyAndPrice>
          </SC.ProductTitleAndPrice>

          <SC.ProductDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            vestibulum, nunc eget accumsan. Nam vestibulum, nunc eget accumsan.
            Nam vestibulum, nunc eget accumsan. Nam vestibulum, nunc eget
            accumsan. Nam vestibulum, nunc eget accumsan. Nam vestibulum, nunc
            eget accumsan. Nam vestibulum, nunc eget accumsan.
          </SC.ProductDescription>
        </SC.ProductDetails>
        <SC.PaymentDetails>
          <SC.AcceptsTrades>
            <SC.AcceptsTradesTitle>
              Accepts trades: <SC.AcceptsTradesValue>Yes</SC.AcceptsTradesValue>
            </SC.AcceptsTradesTitle>
          </SC.AcceptsTrades>

          <SC.PaymentMethods>
            <SC.PaymentMethodsTitle>Payment methods:</SC.PaymentMethodsTitle>

            <FlatList
              data={paymentMethods}
              keyExtractor={(item) => item.title}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'space-between',
              }}
              renderItem={({ item }) => (
                <SC.PaymentMethodItem>
                  <item.Icon size={24} color="#000" />
                  <SC.PaymentMethodText>{item.title}</SC.PaymentMethodText>
                </SC.PaymentMethodItem>
              )}
            />
          </SC.PaymentMethods>
        </SC.PaymentDetails>
      </SC.Content>
      <SC.Footer>
        <SC.FooterPrice>
          <SC.Currency size="lg">EUR</SC.Currency>
          <SC.Price size="lg">1,000.00</SC.Price>
        </SC.FooterPrice>

        <Button
          label="Contact seller"
          type="blue"
          Icon={WhatsappLogo}
          iconColor="light"
          iconWeight="fill"
          style={{ width: '50%' }}
        />
      </SC.Footer>
    </SC.Main>
  )
}
