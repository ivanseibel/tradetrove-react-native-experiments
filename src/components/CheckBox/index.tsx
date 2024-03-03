import * as SC from './styles'

type ComponentProps = {
  value: boolean
  onValueChange: (value: boolean) => void
}

export const CheckBox = ({ value, onValueChange }: ComponentProps) => {
  return (
    <SC.Container onPress={() => onValueChange(!value)}>
      <SC.CheckBox value={value}>
        <SC.Check value={value} />
      </SC.CheckBox>
      <SC.Label>Label</SC.Label>
    </SC.Container>
  )
}
