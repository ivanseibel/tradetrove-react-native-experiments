import { TextInputProps } from 'react-native'
import * as SC from './styles'
import { useInputContext } from '../InputWrapper'
import { useEffect } from 'react'

export const TextInput = (props: TextInputProps) => {
  const { secureTextEntry } = props
  const { setPasswordInput, setFilled, setFocus, isPasswordVisible } =
    useInputContext()

  useEffect(() => {
    setPasswordInput(!!secureTextEntry)
  }, [secureTextEntry, setPasswordInput])

  return (
    <SC.TextInput
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onChange={(e) => {
        if (props.onChange) {
          props.onChange(e)
        }
        setFilled(!!e.nativeEvent.text)
      }}
      {...props}
      secureTextEntry={!isPasswordVisible && !!secureTextEntry}
    />
  )
}
