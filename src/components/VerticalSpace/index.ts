import styled from 'styled-components/native'

type VerticalSpaceProps = {
  height: number
}

export const VerticalSpace = styled.View<VerticalSpaceProps>`
  height: ${({ height }) => height}px;
  width: '100%';
`
