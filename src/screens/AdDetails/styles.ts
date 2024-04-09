import { ArrowLeft, Pencil, PencilSimpleLine } from 'phosphor-react-native'
import { TouchableOpacity, Text, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

type PriceProps = {
  size: 'md' | 'lg'
}

export const Main = styled(SafeAreaView).attrs({
  edges: ['top'],
})`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray6};
`

export const NavigationHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 24px 10px;
`

export const NavigationButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  width: 30px;
  height: 30px;
  align-items: center;
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray2,
}))``

export const EditButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
    width: 30px;
    height: 30px;
    align-items: center;
`

export const EditIcon = styled(PencilSimpleLine).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray2,
}))``

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    // paddingBottom: 16,
    paddingTop: 20,
    // paddingHorizontal: 24,
    alignItems: 'center',
    // gap: 24,
  },
  showsVerticalScrollIndicator: false,
  bounces: false,
})`

`

export const SellerInfo = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  padding: 0 24px;
`

export const SellerAvatar = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`

export const SellerName = styled.Text`
  flex: 1;

  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: ${({ theme }) => theme.lineHeight.sm}px;
  color: ${({ theme }) => theme.colors.gray1};
`

export const ProductDetails = styled.View`
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  padding: 0 24px;
`

export const BadgeWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.gray5};
  border-radius: 15px;
  overflow: hidden;
  
  padding: 3px 8px;
  justify-content: center;
  align-items: center;
`

export const BadgeText = styled.Text`
  color: ${({ theme }) => theme.colors.gray2};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize['2xs']}px;
  line-height: ${({ theme }) => theme.lineHeight['2xs']}px;
  text-transform: uppercase;
`

export const ProductTitleAndPrice = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: 12px;
  align-self: stretch;
`

export const ProductTitle = styled(Text).attrs({
  numberOfLines: 1,
})`
  flex: 1;
  align-self: stretch;

  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  line-height: ${({ theme }) => theme.lineHeight.xl}px;
  color: ${({ theme }) => theme.colors.gray1};
`

export const CurrencyAndPrice = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: 2px;
`

export const Currency = styled.Text<PriceProps>`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: ${({ theme }) => theme.lineHeight.sm}px;
  color: ${({ theme, size }) =>
    size === 'md' ? theme.colors.bluelight : theme.colors.blue};
  
  margin-bottom: ${({ theme, size }) => (size === 'md' ? 2 : 4)}px;

  text-align: center;
`

export const Price = styled.Text<PriceProps>`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme, size }) =>
    size === 'md' ? theme.fontSize.xl : theme.fontSize['2xl']}px;
  line-height: ${({ theme, size }) =>
    size === 'md' ? theme.lineHeight.xl : theme.lineHeight['2xl']}px;
  color: ${({ theme, size }) =>
    size === 'md' ? theme.colors.bluelight : theme.colors.blue};
`

export const ProductDescription = styled(Text).attrs({
  numberOfLines: 5,
})`
  align-self: stretch;

  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: ${({ theme }) => theme.lineHeight.sm}px;
  color: ${({ theme }) => theme.colors.gray2};
`

export const PaymentDetails = styled.View`
  align-items: center;
  gap: 12px;
  align-self: stretch;
`

export const AcceptsTrades = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  padding: 0 24px;
`

export const AcceptsTradesTitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: ${({ theme }) => theme.lineHeight.sm}px;
  color: ${({ theme }) => theme.colors.gray2};
`

export const AcceptsTradesValue = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: ${({ theme }) => theme.lineHeight.sm}px;
  color: ${({ theme }) => theme.colors.gray2};
`

export const PaymentMethods = styled.View`
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  padding: 0 24px;
`

export const PaymentMethodsTitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: ${({ theme }) => theme.lineHeight.sm}px;
  color: ${({ theme }) => theme.colors.gray2};
`

export const PaymentMethodsList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const PaymentMethodItem = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 48%;
`

export const PaymentMethodText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: ${({ theme }) => theme.lineHeight.sm}px;
  color: ${({ theme }) => theme.colors.gray2};
`

export const Footer = styled(SafeAreaView).attrs({
  edges: ['bottom'],
})`
  flex-direction: row;
  width: 100%;
  padding: 0 24px;
  padding-top: ${Platform.OS === 'ios' ? '16px' : '0'};
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  height: ${Platform.OS === 'ios' ? '100px' : '90px'};
`

export const FooterPrice = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: 4px;
`

export const MyAdFooter = styled(SafeAreaView).attrs({
  edges: ['bottom'],
})`
  gap: 8px;
  align-self: stretch;
  padding: ${Platform.OS === 'ios' ? '0 24px 0' : '0 24px 8px'};
`
