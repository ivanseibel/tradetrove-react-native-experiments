import { IconProps, Plus, Tag } from 'phosphor-react-native'
import { TouchableOpacityProps } from 'react-native'

import * as SC from './styles'
import { useTheme } from 'styled-components/native'

type ComponentProps = TouchableOpacityProps & {
  label: string
  type: SC.ButtonType
  Icon?: React.ComponentType<IconProps>
  iconColor?: 'dark' | 'light'
  iconSize?: number
}

export const Button = ({
  label,
  type,
  Icon,
  iconColor,
  iconSize,
  ...rest
}: ComponentProps) => {
  const { colors } = useTheme()

  return (
    <SC.Button type={type} {...rest}>
      {Icon && (
        <Icon
          size={!iconSize ? 16 : iconSize}
          color={!(iconColor === 'dark') ? colors.gray3 : colors.gray7}
          weight="bold"
        />
      )}

      <SC.ButtonLabel type={type}>{label}</SC.ButtonLabel>
    </SC.Button>
  )
}
