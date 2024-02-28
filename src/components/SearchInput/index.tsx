import * as SC from './styles'

export const SearchInput = () => {
  return (
    <SC.Main>
      <SC.Input placeholder="Search for products" />
      <SC.SearchIcon />
      <SC.VerticalDivider />
      <SC.FilterIcon />
    </SC.Main>
  )
}
