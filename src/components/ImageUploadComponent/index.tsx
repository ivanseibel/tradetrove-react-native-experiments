import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  Alert,
  Text,
  StyleSheet,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as SC from './styles'
import { CloseIcon } from '@components/FilterOptionsModal/styles'
import { Plus, X } from 'phosphor-react-native'
import theme from '@theme/index'

export const ImageUploadComponent = () => {
  const [images, setImages] = useState<string[]>([]) // Store URIs of selected images

  const { colors } = theme

  const handleSelectImage = async () => {
    if (images.length >= 3) {
      Alert.alert('Limit reached', 'You can only upload up to 3 images.')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsMultipleSelection: false,
    })

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri])
    }
  }

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  return (
    <SC.Main>
      {images.map((image, index) => (
        <SC.ImageContainer key={image}>
          <SC.Image source={{ uri: image }} />
          <SC.RemoveButton onPress={() => handleRemoveImage(index)}>
            <X size={12} color="white" />
          </SC.RemoveButton>
        </SC.ImageContainer>
      ))}
      {images.length < 3 && (
        <SC.Placeholder onPress={handleSelectImage}>
          <Plus size={24} color={colors.gray4} />
        </SC.Placeholder>
      )}
    </SC.Main>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 100, // Adjust the size as needed
    height: 100, // Adjust the size as needed
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'dashed',
  },
  removeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    // Style your remove button
  },
})
