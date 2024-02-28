import styled from 'styled-components/native'

export const Main = styled.View`
  flex: 1;
  gap: 24px;
  width: 100%;
`

export const FilterContainer = styled.View`
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray3};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: ${({ theme }) => theme.lineHeight.sm}px;
`
