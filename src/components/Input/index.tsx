import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputProps,
} from 'react-native'
import * as SC from './styles'
import { useState } from 'react'

type ComponentProps = TextInputProps & {
  errorMessage?: string
  type?: 'text' | 'password'
  multiline?: boolean
  multilineHeight?: number
}

export const TextInput = ({
  errorMessage = undefined,
  onChange,
  type = 'text',
  multiline = false,
  multilineHeight = 160,
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
        multiline={multiline}
      >
        <SC.TextInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={type === 'password' && !isPasswordVisible}
          multiline={multiline}
          multilineHeight={multiline ? multilineHeight : undefined}
          {...rest}
          onChange={handleOnChange}
        />

        {type === 'password' && (
          <SC.PasswordVisibilityButton onPress={handleTogglePasswordVisibility}>
            {isPasswordVisible ? <SC.EyeOpenIcon /> : <SC.EyeClosedIcon />}
          </SC.PasswordVisibilityButton>
        )}
      </SC.TextInputContainer>
    </SC.InputController>
  )
}
