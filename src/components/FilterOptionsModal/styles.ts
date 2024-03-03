import { X, XCircle } from 'phosphor-react-native'
import { Switch, TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

type ConditionBadgeProps = {
  active: boolean
}

export const MainContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
`

export const ContentContainer = styled.View`
  align-self: stretch;
  justify-content: flex-start;

  padding: 0 24px 32px;
  gap: 24px;

  border-radius: 24px 24px 0px 0px;
  background: ${({ theme }) => theme.colors.gray6};
`

export const Divider = styled.View`
  width: 56px;
  height: 4px;

  margin-top: 12px;
  margin-bottom: 8px;
  align-self: center;

  opacity: 0.3;
  background: ${({ theme }) => theme.colors.gray4};
`

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CloseButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
`

export const CloseIcon = styled(X).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray4,
  weight: 'bold',
}))`
`

export const FilterOptionsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray1};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: 20px;
  /* font-size: ${({ theme }) => theme.fontSize.xl}px; */
  line-height: ${({ theme }) => theme.lineHeight.xl}px;
`

export const OptionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray2};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: ${({ theme }) => theme.lineHeight.sm}px;
`

export const OptionContainer = styled.View`
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`

export const ConditionBadgeContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
`

export const ConditionBadge = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})<ConditionBadgeProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  border-radius: 28px;
  width: 76px;
  height: 28px;
  
  ${({ active, theme }) =>
    active
      ? css`
        background: ${theme.colors.bluelight};
        padding: 6px 9px 6px 16px;
        gap: 2px;
    `
      : css`
        background: ${theme.colors.gray5};
        padding: 6px 16px;
        gap: 0px;
    `}
`

export const ConditionBadgeTitle = styled.Text<ConditionBadgeProps>`
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.gray3};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  line-height: ${({ theme }) => theme.lineHeight.xs}px;
  text-transform: uppercase;
`

export const ConditionBadgeIcon = styled(XCircle).attrs(({ theme }) => ({
  size: 16,
  color: theme.colors.gray6,
  weight: 'fill',
}))`
`

export const OpenToTradeSwitch = styled(Switch).attrs(({ theme }) => ({
  trackColor: {
    false: theme.colors.gray5,
    true: theme.colors.bluelight,
  },
  thumbColor: theme.colors.white,
}))`
  height: 28px;
`

export const PaymentMethodContainer = styled.View`
  align-self: stretch;
  gap: 8px;
  align-items: flex-start;
`

// export const PaymentMethodCheckboxContainer = styled.View`
//   flex-direction: row;
//   align-items: center;
//   gap: 8px;
// `

// export const PaymentMethodCheckboxTitle = styled.Text`
//   color: ${({ theme }) => theme.colors.gray2};
//   font-family: ${({ theme }) => theme.fontFamily.regular};
//   font-size: ${({ theme }) => theme.fontSize.md}px;
//   line-height: ${({ theme }) => theme.lineHeight.md}px;
// `
