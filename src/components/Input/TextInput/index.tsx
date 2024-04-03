import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputProps,
} from 'react-native'
import * as SC from './styles'
import { useInputContext } from '../InputWrapper'

export const TextInput = (props: TextInputProps) => {
  const { secureTextEntry } = props
  const { setIsPasswordInput, setFilled, setFocus, passwordVisible } =
    useInputContext()

  setIsPasswordInput(!!secureTextEntry)

  const handleOnChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    if (props.onChange) {
      props.onChange(e)
    }
    setFilled(!!e.nativeEvent.text)
  }

  return (
    <SC.TextInput
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onChange={handleOnChange}
      {...props}
      secureTextEntry={!passwordVisible && !!secureTextEntry}
    />
  )
}
