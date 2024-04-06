import * as SC from './styles'
import { ReactNode, createContext, useContext, useState } from 'react'

type ComponentProps = {
  errorMessage?: string
  children: ReactNode
}

type InputContextType = {
  isFocused: boolean
  isFilled: boolean
  isPasswordVisible?: boolean
  isPasswordInput?: boolean
  setFocus: (focused: boolean) => void
  setFilled: (filled: boolean) => void
  setPasswordVisible: (visible: boolean) => void
  setPasswordInput: (isPassword: boolean) => void
}

const InputContext = createContext({
  isFocused: false,
  isFilled: false,
  setFocus: () => {},
  setFilled: () => {},
  setPasswordVisible: () => {},
  setPasswordInput: () => {},
} as InputContextType)

export const useInputContext = () => useContext(InputContext)

export const InputWrapper = ({
  errorMessage = undefined,
  children,
}: ComponentProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isPasswordInput, setIsPasswordInput] = useState(false)

  const setFocus = (focused: boolean) => setIsFocused(focused)
  const setFilled = (filled: boolean) => setIsFilled(filled)
  const setPasswordVisible = (visible: boolean) => setIsPasswordVisible(visible)
  const setPasswordInput = (isPassword: boolean) =>
    setIsPasswordInput(isPassword)

  return (
    <InputContext.Provider
      value={{
        isFocused,
        isFilled,
        isPasswordVisible,
        isPasswordInput,
        setFocus,
        setFilled,
        setPasswordVisible,
        setPasswordInput,
      }}
    >
      <SC.InputController>
        {!!errorMessage && (
          <SC.InputErrorLabel>{errorMessage}</SC.InputErrorLabel>
        )}
        <SC.InputContainer
          error={!!errorMessage}
          isFocused={isFocused}
          isFilled={isFilled}
        >
          {children}
        </SC.InputContainer>
      </SC.InputController>
    </InputContext.Provider>
  )
}
