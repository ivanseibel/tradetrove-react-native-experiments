import { ContentText } from '@components/ContentText'

import * as SC from './styles'
import { useState } from 'react'
import { IndexPath, Select, SelectItem } from '@ui-kitten/components'
import { ProductList } from '@components/ProductList'

export const MyAds: React.FC = () => {
  return (
    <SC.Main>
      <SC.Header>
        <SC.HeaderTitle>My Ads</SC.HeaderTitle>
        <SC.AddButton>
          <SC.AddIcon />
        </SC.AddButton>
      </SC.Header>

      <ProductList headerType="myAds" />
    </SC.Main>
  )
}
