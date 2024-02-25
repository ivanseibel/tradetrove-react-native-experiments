import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonType = 'black' | 'blue' | 'gray'

type ButtonProps = {
  type: ButtonType
}

type LabelProps = ButtonProps

export const Button = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})<ButtonProps>`
  ${({ theme, type }) => css`
    padding: 12px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: 6px;
    width: 100%;
    background-color: ${
      type === 'black'
        ? theme.colors.gray1
        : type === 'blue'
          ? theme.colors.bluelight
          : type === 'gray'
            ? theme.colors.gray5
            : 'transparent'
    };
  `};
`

export const ButtonLabel = styled.Text<LabelProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.fontSize.sm}px;
    line-height: ${theme.lineHeight.sm}px;
    font-family: ${theme.fontFamily.bold};
    color: ${
      ['black', 'blue'].includes(type) ? theme.colors.gray7 : theme.colors.gray1
    };
  `};
`
