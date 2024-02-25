import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputProps,
  TouchableOpacity,
} from 'react-native'
import * as SC from './styles'
import { useState } from 'react'

type ComponentProps = TextInputProps & {
  errorMessage?: string
  type?: 'text' | 'password'
}

export const TextInput = ({
  errorMessage = undefined,
  onChange,
  type = 'text',
  ...rest
}: ComponentProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

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
      {!!errorMessage && (
        <SC.InputErrorLabel>{errorMessage}</SC.InputErrorLabel>
      )}
      <SC.TextInputContainer
        error={!!errorMessage}
        isFocused={isFocused}
        isFilled={isFilled}
      >
        <SC.TextInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={type === 'password' && !isPasswordVisible}
          {...rest}
          onChange={handleOnChange}
        />

        {type === 'password' && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleTogglePasswordVisibility}
          >
            {isPasswordVisible ? <SC.EyeOpenIcon /> : <SC.EyeClosedIcon />}
          </TouchableOpacity>
        )}
      </SC.TextInputContainer>
    </SC.InputController>
  )
}
