import { MagnifyingGlass, Sliders } from 'phosphor-react-native'
import { TextInput } from 'react-native'
import styled from 'styled-components/native'

export const Main = styled.View`
  flex-direction: row;
  padding: 12px 16px;
  align-items: center;
  gap: 12px;
  align-self: stretch;

  border-radius: 6px;
  background: ${({ theme }) => theme.colors.gray7};
`

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray4,
}))`
  flex-direction: row;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  line-height: ${({ theme }) => theme.lineHeight.md}px;
  flex: 1;
`

export const SearchIcon = styled(MagnifyingGlass).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.gray1,
}))`
`

export const VerticalDivider = styled.View`
  width: 1px;
  height: 18px;
  background: ${({ theme }) => theme.colors.gray5};
`

export const FilterIcon = styled(Sliders).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.gray1,
}))`
`
