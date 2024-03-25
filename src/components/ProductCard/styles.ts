import { Image, Text, TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

type ConditionBadgeProps = {
  condition: 'new' | 'used'
}

type ProductCardProps = {
  active: boolean
}

export const Main = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
  align-items: flex-start;
  gap: 4px;
  width: 48%;
`

export const ProductImageContainer = styled.View`
  height: 100px;
  width: 100%;

  border-radius: 6px;
  background: ${({ theme }) => theme.colors.gray7};
  overflow: hidden;

  position: relative;
`

export const ProductImage = styled(Image).attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  align-self: stretch;
  height: 110px;
  flex-shrink: 0;
`

export const SellerAvatar = styled(Image).attrs({
  resizeMode: 'cover',
})`
  width: 24px;
  height: 24px;

  border-radius: 24px;
  border-color: ${({ theme }) => theme.colors.gray7};
  border-width: 1px;

  position: absolute;
  left: 4px;
  top: 4px;
`

export const BadgeWrapper = styled.View<ConditionBadgeProps>`
  ${({ condition, theme }) =>
    condition === 'new' &&
    `
    background-color: ${theme.colors.blue};
  `}
  ${({ condition, theme }) =>
    condition === 'used' &&
    `
    background-color: ${theme.colors.gray2};
  `}

  border-radius: 15px;
  overflow: hidden;
  
  padding: 3px 8px;
  justify-content: center;
  align-items: center;
  
  position: absolute;
  top: 4px;
  right: 4px;
`

export const ProductInactiveOverlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`

export const ProductInactiveText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: ${({ theme }) => theme.lineHeight.sm}px;
  position: absolute;
  bottom: 8px;
  left: 8px;
`

export const ConditionBadgeText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize['2xs']}px;
  line-height: ${({ theme }) => theme.lineHeight['2xs']}px;
  text-transform: uppercase;
`

export const ProductInfo = styled.View`
  padding: 0px 2px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`

export const ProductName = styled(Text).attrs({
  numberOfLines: 1,
})<ProductCardProps>`
  height: 18px;
  align-items: center;
  align-self: stretch;

  color: ${({ theme, active }) =>
    active ? theme.colors.gray2 : theme.colors.gray4};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: ${({ theme }) => theme.lineHeight.sm}px;
`

export const ProductPriceContainer = styled.View`
  flex-direction: row;
  gap: 2px;
  align-items: flex-end;
  align-self: stretch;
`

export const ProductPriceCurrency = styled.Text<ProductCardProps>`
  color: ${({ theme, active }) =>
    active ? theme.colors.gray1 : theme.colors.gray4};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  margin-bottom: 2px;
`

export const ProductPrice = styled.Text<ProductCardProps>`
  color: ${({ theme, active }) =>
    active ? theme.colors.gray1 : theme.colors.gray4};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.md}px;
`
