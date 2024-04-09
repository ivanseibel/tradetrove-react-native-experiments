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
import { Toggle } from '@ui-kitten/components'
import { useState } from 'react'
import { VerticalSpace } from '@components/VerticalSpace'
import { CheckboxGroup } from '@components/CheckboxGroup'
import { Button } from '@components/Button'
import { AppNavigatorRoutesProps } from '@routes/app.route'

const fakeProps = {
  operation: 'create',
}

export const AdForm = () => {
  const [checked, setChecked] = useState(false)
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const onCheckedChange = (
    isChecked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setChecked(isChecked)
  }

  const handleBack = () => {
    navigation.goBack()
  }

  const handleNext = () => {
    navigation.navigate('adDetails', {
      id: '123',
      detailsType: 'preview',
    })
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
            style={{ width: '100%', flex: 1 }}
            contentContainerStyle={{
              flexGrow: 1,
              marginBottom: 20,
            }}
            contentInset={{ bottom: 5 }}
            showsVerticalScrollIndicator={false}
            bounces={false}
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

            <SC.SectionContainer>
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
            </SC.SectionContainer>

            <VerticalSpace height={20} />

            <SC.SectionContainer>
              <SC.SectionTitle>Accepts trade?</SC.SectionTitle>
              <Toggle
                checked={checked}
                onChange={onCheckedChange}
                style={{ margin: 0 }}
              />
            </SC.SectionContainer>

            <VerticalSpace height={20} />

            <SC.SectionContainer>
              <SC.SectionTitle>Payment methods</SC.SectionTitle>
              <CheckboxGroup
                columns={2}
                options={[
                  { label: 'Cash', value: false },
                  { label: 'Credit Card', value: false },
                  { label: 'Debit Card', value: false },
                  { label: 'Bank Transfer', value: false },
                  { label: 'Paypal', value: false },
                  { label: 'Bitcoin', value: false },
                ]}
                onChange={(index) => console.log(index)}
              />
            </SC.SectionContainer>

            <VerticalSpace height={20} />

            <SC.Footer>
              <Button
                label="Cancel"
                onPress={() => console.log('Cancel')}
                type="gray"
                style={{
                  width: '48%',
                }}
              />
              <Button
                label="Next"
                onPress={handleNext}
                type="black"
                style={{
                  width: '48%',
                }}
              />
            </SC.Footer>
          </ScrollView>
        </SC.Main>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
