import { Modal } from 'react-native'
import * as SC from './styles'
import { useState } from 'react'
import { CheckBox } from '@components/CheckBox'
import { Button } from '@components/Button'

type FilterOptionsModalProps = {
  visible: boolean
  onRequestClose: () => void
}

type PaymentMethodOption = {
  id: string
  title: string
  selected: boolean
}

const paymentMethodOptions: PaymentMethodOption[] = [
  { id: '1', title: 'Cash', selected: false },
  { id: '2', title: 'Credit Card', selected: false },
  { id: '3', title: 'Debit Card', selected: false },
  { id: '4', title: 'Bank Transfer', selected: false },
  { id: '5', title: 'Paypal', selected: false },
  { id: '6', title: 'Bitcoin', selected: false },
]

export const FilterOptionsModal = ({
  visible,
  onRequestClose,
}: FilterOptionsModalProps) => {
  const [usedIsSelected, setUsedIsSelected] = useState(false)
  const [newIsSelected, setNewIsSelected] = useState(false)
  const [openToTrade, setOpenToTrade] = useState(false)
  const [paymentMethods, setPaymentMethods] = useState(paymentMethodOptions)

  const handlePaymentMethodSelection = (id: string, selected: boolean) => {
    const updatedPaymentMethods = paymentMethods.map((method) => {
      if (method.id === id) {
        return {
          ...method,
          selected: selected,
        }
      }

      return method
    })

    setPaymentMethods(updatedPaymentMethods)
  }

  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      transparent
      animationType="slide"
      statusBarTranslucent
    >
      <SC.MainContainer>
        <SC.ContentContainer>
          <SC.Divider />

          <SC.HeaderContainer>
            <SC.FilterOptionsTitle>Filter Options</SC.FilterOptionsTitle>
            <SC.CloseButton onPress={onRequestClose}>
              <SC.CloseIcon />
            </SC.CloseButton>
          </SC.HeaderContainer>

          <SC.OptionContainer>
            <SC.OptionTitle>Condition</SC.OptionTitle>

            <SC.ConditionBadgeContainer>
              <SC.ConditionBadge
                active={newIsSelected}
                onPress={() => setNewIsSelected(!newIsSelected)}
              >
                <SC.ConditionBadgeTitle active={newIsSelected}>
                  New
                </SC.ConditionBadgeTitle>
                {newIsSelected && <SC.ConditionBadgeIcon />}
              </SC.ConditionBadge>
              <SC.ConditionBadge
                active={usedIsSelected}
                onPress={() => setUsedIsSelected(!usedIsSelected)}
              >
                <SC.ConditionBadgeTitle active={usedIsSelected}>
                  Used
                </SC.ConditionBadgeTitle>
                {usedIsSelected && <SC.ConditionBadgeIcon />}
              </SC.ConditionBadge>
            </SC.ConditionBadgeContainer>
          </SC.OptionContainer>

          <SC.OptionContainer>
            <SC.OptionTitle>Open to Trade?</SC.OptionTitle>
            <SC.OpenToTradeSwitch
              value={openToTrade}
              onValueChange={() => setOpenToTrade(!openToTrade)}
            />
          </SC.OptionContainer>

          <SC.OptionContainer>
            <SC.OptionTitle>Payment Method</SC.OptionTitle>
            <SC.PaymentMethodContainer>
              {paymentMethods.map((option) => (
                <CheckBox
                  key={option.id}
                  label={option.title}
                  value={option.selected}
                  onValueChange={(value) =>
                    handlePaymentMethodSelection(option.id, value)
                  }
                />
              ))}
            </SC.PaymentMethodContainer>
          </SC.OptionContainer>

          <SC.ActionsContainer>
            <Button
              style={{ width: '48%' }}
              onPress={() => {}}
              label="Reset"
              type="gray"
            />
            <Button
              style={{ width: '48%' }}
              onPress={() => {}}
              label="Apply"
              type="black"
            />
          </SC.ActionsContainer>
        </SC.ContentContainer>
      </SC.MainContainer>
    </Modal>
  )
}
