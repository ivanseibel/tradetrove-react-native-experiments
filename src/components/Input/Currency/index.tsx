import { TextProps } from 'react-native'
import * as SC from './styles'

export const Currency = ({ children, ...props }: TextProps) => {
  return <SC.Currency {...props}>{children}</SC.Currency>
}
