import { Modal, ModalProps } from 'react-native'
import * as SC from './styles'
import { useState } from 'react'
import { ConditionBadgeTitle } from './styles'

type FilterOptionsModalProps = {
  visible: boolean
  onRequestClose: () => void
}

export const FilterOptionsModal = ({
  visible,
  onRequestClose,
}: FilterOptionsModalProps) => {
  const [usedIsSelected, setUsedIsSelected] = useState(false)
  const [newIsSelected, setNewIsSelected] = useState(false)

  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      transparent
      animationType="slide"
    >
      <SC.MainContainer>
        <SC.ContentContainer>
          <SC.Divider />

          <SC.HeaderContainer>
            <SC.Title>Filter Options</SC.Title>
            <SC.CloseButton onPress={onRequestClose}>
              <SC.CloseIcon />
            </SC.CloseButton>
          </SC.HeaderContainer>

          <SC.ConditionContainer>
            <SC.Title>Condition</SC.Title>

            <SC.ConditionBadgeContainer>
              <SC.ConditionBadge
                active={newIsSelected}
                onPress={() => setNewIsSelected(!newIsSelected)}
              >
                <SC.ConditionBadgeTitle active={newIsSelected}>
                  New
                </SC.ConditionBadgeTitle>
                {newIsSelected && <SC.BadgeIcon />}
              </SC.ConditionBadge>
              <SC.ConditionBadge
                active={usedIsSelected}
                onPress={() => setUsedIsSelected(!usedIsSelected)}
              >
                <SC.ConditionBadgeTitle active={usedIsSelected}>
                  Used
                </SC.ConditionBadgeTitle>
                {usedIsSelected && <SC.BadgeIcon />}
              </SC.ConditionBadge>
            </SC.ConditionBadgeContainer>
          </SC.ConditionContainer>
        </SC.ContentContainer>
      </SC.MainContainer>
    </Modal>
  )
}
