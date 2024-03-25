import * as SC from './styles'
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

      <ProductList headerType="myAds" showInactive={true} />
    </SC.Main>
  )
}
