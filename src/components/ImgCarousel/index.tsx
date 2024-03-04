import { useState } from 'react'
import { PagerViewOnPageSelectedEvent } from 'react-native-pager-view'
import * as SC from './styles'
import { NativeSyntheticEvent } from 'react-native'

export const ImgCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const onPageSelected = (e: PagerViewOnPageSelectedEvent) => {
    setCurrentPage(e.nativeEvent.position)
  }

  return (
    <SC.Main>
      <SC.CarouselViewer
        initialPage={0}
        onPageSelected={onPageSelected}
        offscreenPageLimit={0}
      >
        <SC.Slide>
          <SC.SlideImage
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/1200px-Left_side_of_Flying_Pigeon.jpg',
            }}
          />
        </SC.Slide>
        <SC.Slide>
          <SC.SlideImage
            source={{
              uri: 'https://c02.purpledshub.com/uploads/sites/39/2019/07/Norco-Search-XR-Apex1-06-16426ea.jpg',
            }}
          />
        </SC.Slide>
        <SC.Slide>
          <SC.SlideImage
            source={{
              uri: 'https://hips.hearstapps.com/hmg-prod/images/adventure-street-travel-and-bike-break-outdoor-in-royalty-free-image-1695135852.jpg',
            }}
          />
        </SC.Slide>
      </SC.CarouselViewer>
      <SC.Pagination>
        <SC.Bar selected={currentPage === 0} />
        <SC.Bar selected={currentPage === 1} />
        <SC.Bar selected={currentPage === 2} />
      </SC.Pagination>
    </SC.Main>
  )
}
