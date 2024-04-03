import { ImageProps } from 'react-native'
import * as SC from './styles'
import DefaultPhoto from '@assets/default-photo.png'
import * as ImagePicker from 'expo-image-picker'

type ComponentProps = ImageProps & {
  setAvatar: (avatar: string) => void
}

export const Avatar = ({ setAvatar, source, ...rest }: ComponentProps) => {
  const handleSelectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsMultipleSelection: false,
    })

    if (!result.canceled) {
      setAvatar(result.assets[0].uri)
    }
  }

  return (
    <SC.MainContainer onPress={handleSelectImage}>
      <SC.AvatarContainer>
        <SC.AvatarImage source={source ? source : DefaultPhoto} {...rest} />
        <SC.EditButton>
          <SC.EditIcon />
        </SC.EditButton>
      </SC.AvatarContainer>
    </SC.MainContainer>
  )
}
