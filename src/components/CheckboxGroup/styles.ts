import styled from 'styled-components/native'

type ContainerProps = {
  columns: number
}

export const Container = styled.View<ContainerProps>`
  /* This will be the flex container for all items */
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export const CheckboxContainer = styled.View<ContainerProps>`
  /* Each checkbox will take up a portion of the container's width, determined by the number of columns */
  width: ${({ columns }) => 100 / columns}%;
  padding: 4px; /* Adjust padding as needed */
`
