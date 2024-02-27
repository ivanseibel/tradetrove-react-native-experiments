import { ContentText } from '@components/ContentText'
import { View } from 'react-native'

export const MyAds: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
      }}
    >
      <ContentText type="dark">My Ads</ContentText>
    </View>
  )
}
