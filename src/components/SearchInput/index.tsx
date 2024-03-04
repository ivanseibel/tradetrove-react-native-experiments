import { useState } from 'react'
import * as SC from './styles'
import { FilterOptionsModal } from '@components/FilterOptionsModal'

export const SearchInput = () => {
  const [filterModalVisible, setFilterModalVisible] = useState(false)

  return (
    <SC.Main>
      <SC.Input placeholder="Search for products" />
      <SC.SearchIcon />
      <SC.VerticalDivider />
      <SC.FilterButton onPress={() => setFilterModalVisible(true)}>
        <SC.FilterIcon />
      </SC.FilterButton>

      <FilterOptionsModal
        visible={filterModalVisible}
        onRequestClose={() => setFilterModalVisible(false)}
      />
    </SC.Main>
  )
}
