import { Image, Platform } from 'react-native'
import PagerView from 'react-native-pager-view'
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

type BarProps = {
  selected: boolean
}

const { width } = Dimensions.get('window')

export const Main = styled.View`
  width: 100%;
  position: relative;
`

export const CarouselViewer = styled(PagerView)`
  width: ${width}px;
  height: 265px;
  `

export const Slide = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 265px;
  position: relative;
`

export const SlideImage = styled(Image).attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
`

export const Pagination = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 4px;
  gap: 5px;
`

export const Bar = styled.View<BarProps>`
  width: 32%;
  height: 3px;
  border-radius: 2px;
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
  background-color: ${({ theme }) => theme.colors.gray7};
`

export const DarkenOverlay = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;  
`

export const InactiveText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: ${({ theme }) => theme.lineHeight.sm}px;
  color: ${({ theme }) => theme.colors.gray7};
`
