import styled from 'styled-components/native'

type WelcomeTextProps = {
  variant: 'normal' | 'bold'
}

export const Main = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  flex:1
`

export const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.bluelight};
`

export const WelcomeContainer = styled.View`
  flex-direction: column;
`

export const WelcomeText = styled.Text<WelcomeTextProps>`
  font-size: ${({ theme }) => theme.fontSize.md}px;
  line-height: ${({ theme }) => theme.lineHeight.md}px;
  color: ${({ theme }) => theme.colors.gray1};
  font-family: ${({ theme, variant }) =>
    variant === 'normal' ? theme.fontFamily.regular : theme.fontFamily.bold};
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 115px;
`
