import { IconProps } from 'phosphor-react-native'
import { TouchableOpacityProps } from 'react-native'
import { ReactNode } from 'react'

import * as SC from './styles'

type ComponentProps = TouchableOpacityProps & {
  label: string
  onClick: () => void
  type: SC.ButtonType
  renderIcon?: () => ReactNode
}

export const Button = ({
  label,
  onClick,
  type,
  renderIcon,
  ...rest
}: ComponentProps) => {
  return (
    <SC.Button type={type} onPress={onClick} {...rest}>
      {renderIcon?.()}
      <SC.ButtonLabel type={type}>{label}</SC.ButtonLabel>
    </SC.Button>
  )
}
