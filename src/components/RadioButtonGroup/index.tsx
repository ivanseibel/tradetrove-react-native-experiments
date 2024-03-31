import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import * as SC from './styles'

type Option = {
  id: string
  label: string
}

type ComponentProps = {
  options: Option[]
  onSelect: (selectedId: string) => void
}

export const RadioButtonGroup = ({ options, onSelect }: ComponentProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const handleSelect = (id: string) => {
    setSelectedId(id)
    onSelect(id)
  }

  return (
    <SC.Container>
      {options.map((option) => (
        <SC.Button key={option.id} onPress={() => handleSelect(option.id)}>
          <SC.Circle selected={selectedId === option.id}>
            {selectedId === option.id && <SC.FilledCircle />}
          </SC.Circle>
          <SC.Label>{option.label}</SC.Label>
        </SC.Button>
      ))}
    </SC.Container>
  )
}
