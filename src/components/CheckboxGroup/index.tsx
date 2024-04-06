import React from 'react'
import { CheckBox } from '@components/CheckBox'
import * as SC from './styles'

type CheckboxGroupProps = {
  columns: number
  options: { label: string; value: boolean }[]
  onChange: (index: number) => void
}

export const CheckboxGroup = ({
  columns,
  options,
  onChange,
}: CheckboxGroupProps) => {
  return (
    <SC.Container columns={columns}>
      {options.map((option, index) => (
        <SC.CheckboxContainer key={option.label} columns={columns}>
          <CheckBox
            label={option.label}
            value={option.value}
            onValueChange={() => onChange(index)}
          />
        </SC.CheckboxContainer>
      ))}
    </SC.Container>
  )
}
