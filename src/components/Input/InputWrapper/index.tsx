import * as SC from './styles'
import { ReactNode, createContext, useContext, useState } from 'react'

type ComponentProps = {
  errorMessage?: string
  children: ReactNode
}

type InputContextType = {
  isFocused: boolean
  isFilled: boolean
  passwordVisible?: boolean
  isPasswordInput?: boolean
  setFocus: (focused: boolean) => void
  setFilled: (filled: boolean) => void
  setPasswordVisible: (visible: boolean) => void
  setIsPasswordInput: (isPassword: boolean) => void
}

const InputContext = createContext({} as InputContextType)

export const useInputContext = () => useContext(InputContext)

export const InputWrapper = ({
  errorMessage = undefined,
  children,
}: ComponentProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [isPasswordInput, setIsPasswordInput] = useState(false)

  const setFocus = (focused: boolean) => setIsFocused(focused)
  const setFilled = (filled: boolean) => setIsFilled(filled)

  return (
    <InputContext.Provider
      value={{
        isFocused,
        isFilled,
        passwordVisible,
        isPasswordInput,
        setFocus,
        setFilled,
        setPasswordVisible,
        setIsPasswordInput,
      }}
    >
      <SC.InputController>
        {!!errorMessage && (
          <SC.InputErrorLabel>{errorMessage}</SC.InputErrorLabel>
        )}
        <SC.TextInputContainer
          error={!!errorMessage}
          isFocused={isFocused}
          isFilled={isFilled}
        >
          {children}
        </SC.TextInputContainer>
      </SC.InputController>
    </InputContext.Provider>
  )
}
