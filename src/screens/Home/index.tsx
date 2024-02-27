import * as SC from './styles'
import { HomeHeader } from '@components/HomeHeader'
import { MyProductsSummary } from '@components/MyProductsSummary'

export default function Home() {
  return (
    <SC.Main>
      <SC.Content>
        <HomeHeader />
        <MyProductsSummary />
      </SC.Content>
    </SC.Main>
  )
}
