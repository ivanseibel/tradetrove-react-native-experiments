import { ImageUploadComponent } from '@components/ImageUploadComponent'
import * as SC from './styles'
import { View } from 'react-native'
import { TextInput } from '@components/Input'

const fakeProps = {
  operation: 'create',
}

export const AdForm = () => {
  return (
    <SC.Main>
      <SC.Header>
        <SC.NavigationButton>
          <SC.BackIcon />
        </SC.NavigationButton>

        <SC.HeaderTitle>
          {fakeProps.operation === 'create' ? 'Create Ad' : 'Edit Ad'}
        </SC.HeaderTitle>
      </SC.Header>

      <SC.ImageContainer>
        <SC.SectionTitle>Photos</SC.SectionTitle>
        <SC.SectionDescription>
          Add up to 3 photos of your item to make it more attractive
        </SC.SectionDescription>

        <View style={{ height: 10 }} />

        <ImageUploadComponent />
      </SC.ImageContainer>

      <View style={{ height: 20 }} />

      <SC.AboutContainer>
        <SC.SectionTitle>About this product</SC.SectionTitle>

        <TextInput placeholder="Title" />
        <TextInput placeholder="Description" multiline numberOfLines={4} />
      </SC.AboutContainer>
    </SC.Main>
  )
}
