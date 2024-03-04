import * as SC from './styles'

type ComponentProps = {
  label: string
  value: boolean
  onValueChange: (value: boolean) => void
}

export const CheckBox = ({ label, value, onValueChange }: ComponentProps) => {
  return (
    <SC.Container onPress={() => onValueChange(!value)}>
      <SC.CheckBox value={value}>
        <SC.Check value={value} />
      </SC.CheckBox>
      <SC.Label>{label}</SC.Label>
    </SC.Container>
  )
}
