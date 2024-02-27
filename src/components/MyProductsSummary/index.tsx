import * as SC from './styles'

export const MyProductsSummary = () => {
  return (
    <SC.Main>
      <SC.Title>My products listed for sale</SC.Title>
      <SC.Content>
        <SC.AdsContainer>
          <SC.TagIcon />
          <SC.AdsCountContainer>
            <SC.AdsCount>5</SC.AdsCount>
            <SC.AdsCountText>active ads</SC.AdsCountText>
          </SC.AdsCountContainer>
        </SC.AdsContainer>
        <SC.MyAdsLink>
          <SC.MyAdsLinkText>My ads</SC.MyAdsLinkText>
          <SC.MyAdsLinkIcon />
        </SC.MyAdsLink>
      </SC.Content>
    </SC.Main>
  )
}
