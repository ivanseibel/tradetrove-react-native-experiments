import { ContentText } from '@components/ContentText'
import * as SC from './styles'
import { HomeHeader } from '@components/HomeHeader'

export default function Home() {
  return (
    <SC.Main>
      <SC.Content>
        <HomeHeader />
      </SC.Content>
    </SC.Main>
  )
}
