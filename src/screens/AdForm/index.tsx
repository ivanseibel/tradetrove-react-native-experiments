import { ImageUploadComponent } from '@components/ImageUploadComponent'
import * as SC from './styles'
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  ScrollView,
  Keyboard,
} from 'react-native'
import { RadioButtonGroup } from '@components/RadioButtonGroup'
import { useNavigation } from '@react-navigation/native'
import { InputWrapper } from '@components/Input/InputWrapper'
import { TextInput } from '@components/Input/TextInput'
import { Currency } from '@components/Input/Currency'
import { VerticalSpace } from '@components/VerticalSpace'

const fakeProps = {
  operation: 'create',
}

export const AdForm = () => {
  const navigation = useNavigation()

  const handleBack = () => {
    navigation.goBack()
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SC.Main>
          <SC.Header>
            <SC.NavigationButton onPress={handleBack}>
              <SC.BackIcon />
            </SC.NavigationButton>

            <SC.HeaderTitle>
              {fakeProps.operation === 'create' ? 'Create Ad' : 'Edit Ad'}
            </SC.HeaderTitle>
          </SC.Header>
          <ScrollView
            style={{ width: '100%' }}
            contentContainerStyle={{
              flexGrow: 1,
              marginBottom: 20,
            }}
            contentInset={{ bottom: 5 }}
            showsVerticalScrollIndicator={false}
          >
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

              <InputWrapper errorMessage="">
                <TextInput
                  placeholder="Title"
                  keyboardType="default"
                  autoCorrect={false}
                />
              </InputWrapper>

              <InputWrapper errorMessage="">
                <TextInput
                  placeholder="Description"
                  multiline
                  numberOfLines={4}
                />
              </InputWrapper>

              <RadioButtonGroup
                options={[
                  { id: '1', label: 'New' },
                  { id: '2', label: 'Used' },
                ]}
                onSelect={(selectedId) => console.log(selectedId)}
              />

              <InputWrapper errorMessage="">
                <Currency>EUR</Currency>
                <TextInput
                  placeholder="Price"
                  keyboardType="numeric"
                  autoCorrect={false}
                />
              </InputWrapper>
            </SC.AboutContainer>
          </ScrollView>
        </SC.Main>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
