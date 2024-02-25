import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputProps,
} from 'react-native'
import * as SC from './styles'
import { useState } from 'react'

type ComponentProps = TextInputProps & {
  errorMessage?: string
}

export const TextInput = ({
  errorMessage = undefined,
  onChange,
  ...rest
}: ComponentProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleOnChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    if (onChange) {
      onChange(e)
    }
    setIsFilled(!!e.nativeEvent.text)
  }

  return (
    <SC.InputController>
      <SC.TextInput
        error={!!errorMessage}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused}
        isFilled={isFilled}
        {...rest}
        onChange={handleOnChange}
      />

      {!!errorMessage && <SC.InputErrorLabel>Invalid email</SC.InputErrorLabel>}
    </SC.InputController>
  )
}
