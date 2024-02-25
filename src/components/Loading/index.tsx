import { ActivityIndicatorProps, ActivityIndicator } from 'react-native'
import { Main } from './styles'

type LoadingProps = ActivityIndicatorProps

export const Loading = (props: LoadingProps) => {
  return (
    <Main style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator {...props} />
    </Main>
  )
}
