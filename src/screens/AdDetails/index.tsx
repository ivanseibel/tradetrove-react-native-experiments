import { useNavigation, useRoute, useTheme } from '@react-navigation/native'
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
  Power,
  Trash,
  ArrowLeft,
  Tag,
} from 'phosphor-react-native'
import { Button } from '@components/Button'
import { AdDetailsParams } from '@routes/app.route'
import { VerticalDivider } from '../../components/SearchInput/styles'
import { VerticalSpace } from '@components/VerticalSpace'
import { View } from 'react-native'

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

const renderAdFooter = () => {
  return (
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
  )
}

const renderAdPreviewFooter = () => {
  return (
    <>
      <VerticalSpace style={{ flex: 1 }} height={0} />
      <SC.Footer>
        <Button
          label="Back and edit"
          type="gray"
          Icon={ArrowLeft}
          iconColor="dark"
          iconWeight="regular"
          style={{ width: '48%' }}
        />

        <Button
          label="Publish"
          type="blue"
          Icon={Tag}
          iconColor="light"
          iconWeight="regular"
          style={{ width: '48%' }}
        />
      </SC.Footer>
    </>
  )
}

const renderMyAdFooter = ({ active }: { active: boolean }) => {
  const { colors } = useTheme()

  return (
    <>
      <VerticalSpace style={{ flex: 1 }} height={0} />
      <SC.MyAdFooter>
        <Button
          label={active ? 'Deactivate Ad' : 'Activate Ad'}
          type={active ? 'black' : 'blue'}
          Icon={Power}
        />
        <Button
          label={'Delete Ad'}
          type={'gray'}
          Icon={Trash}
          iconColor="dark"
        />
      </SC.MyAdFooter>
    </>
  )
}

export const AdDetails = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const { id, detailsType } = route.params as AdDetailsParams
  const active = true

  const handleBackPress = () => {
    navigation.goBack()
  }

  return (
    <SC.Main>
      {detailsType !== 'preview' ? (
        <SC.NavigationHeader>
          <SC.NavigationButton onPress={handleBackPress}>
            <SC.BackIcon />
          </SC.NavigationButton>

          {detailsType === 'myAd' && (
            <SC.EditButton>
              <SC.EditIcon />
            </SC.EditButton>
          )}
        </SC.NavigationHeader>
      ) : (
        <SC.PreviewHeader>
          <SC.PreviewHeaderTitle>Ad preview</SC.PreviewHeaderTitle>
          <SC.PreviewHeaderSubtitle>
            This is how your ad will look like
          </SC.PreviewHeaderSubtitle>
        </SC.PreviewHeader>
      )}

      <ImgCarousel />
      <SC.Content>
        <SC.SellerInfo>
          <SC.SellerAvatar
            source={{ uri: 'https://github.com/ivanseibel.png' }}
          />
          <SC.SellerName>John Doe</SC.SellerName>
        </SC.SellerInfo>

        <VerticalSpace height={18} />

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
            Nam vestibulum, nunc eget accumsan.
          </SC.ProductDescription>
        </SC.ProductDetails>

        <VerticalSpace height={18} />

        <SC.PaymentDetails>
          <SC.AcceptsTrades>
            <SC.AcceptsTradesTitle>
              Accepts trades: <SC.AcceptsTradesValue>Yes</SC.AcceptsTradesValue>
            </SC.AcceptsTradesTitle>
          </SC.AcceptsTrades>

          <SC.PaymentMethods>
            <SC.PaymentMethodsTitle>Payment methods:</SC.PaymentMethodsTitle>

            <SC.PaymentMethodsList>
              {paymentMethods.map((item) => (
                <SC.PaymentMethodItem key={item.title}>
                  <item.Icon size={24} color="#000" />
                  <SC.PaymentMethodText>{item.title}</SC.PaymentMethodText>
                </SC.PaymentMethodItem>
              ))}
            </SC.PaymentMethodsList>
          </SC.PaymentMethods>
        </SC.PaymentDetails>

        {detailsType === 'myAd' && renderMyAdFooter({ active })}
        {detailsType === 'preview' && renderAdPreviewFooter()}
      </SC.Content>
      {detailsType === 'ad' && renderAdFooter()}
    </SC.Main>
  )
}
