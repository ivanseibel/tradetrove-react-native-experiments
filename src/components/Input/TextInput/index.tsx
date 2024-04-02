import { TextInputProps } from 'react-native'
import * as SC from './styles'
import { useInputContext } from '../InputWrapper'

export const TextInput = (props: TextInputProps) => {
  const { secureTextEntry } = props
  const { setIsPasswordInput, setFilled, setFocus, passwordVisible } =
    useInputContext()

  setIsPasswordInput(!!secureTextEntry)

  const handleOnChangeText = (text: string) => {
    setFilled(!!text)
    props.onChangeText?.(text)
  }

  return (
    <SC.TextInput
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onChangeText={handleOnChangeText}
      {...props}
      secureTextEntry={!passwordVisible && !!secureTextEntry}
    />
  )
}
