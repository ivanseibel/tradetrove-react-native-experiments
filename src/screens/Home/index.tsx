import * as SC from './styles'
import { HomeHeader } from '@components/HomeHeader'
import { MyProductsSummary } from '@components/MyProductsSummary'
import { ProductList } from '@components/ProductList'

export default function Home() {
  return (
    <SC.Main>
      <SC.Content>
        <HomeHeader />
        <MyProductsSummary />
        <ProductList headerType="home" />
      </SC.Content>
    </SC.Main>
  )
}
