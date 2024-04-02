import { useInputContext } from '../InputWrapper'
import * as SC from './styles'
import { useState } from 'react'

export const PasswordVisibility = () => {
  const { setPasswordVisible, passwordVisible } = useInputContext()

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <SC.PasswordVisibilityButton onPress={handleTogglePasswordVisibility}>
      {passwordVisible ? <SC.EyeOpenIcon /> : <SC.EyeClosedIcon />}
    </SC.PasswordVisibilityButton>
  )
}
