import { ImageProps } from 'react-native'
import * as SC from './styles'
import DefaultPhoto from '@assets/default-photo.png'

type ComponentProps = ImageProps

export const Avatar = ({ source, ...rest }: ComponentProps) => {
  return (
    <SC.MainContainer>
      <SC.AvatarContainer>
        <SC.AvatarImage source={source ? source : DefaultPhoto} {...rest} />
        <SC.EditButton>
          <SC.EditIcon />
        </SC.EditButton>
      </SC.AvatarContainer>
    </SC.MainContainer>
  )
}
