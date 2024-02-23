import { StyledComponentProps } from '@gluestack-style/react/lib/typescript/types'
import { Center, Spinner } from '@gluestack-ui/themed'
import { ActivityIndicatorProps, StyleProp, ViewStyle } from 'react-native'

// type LoadingProps is same type as Spinner
type LoadingProps = React.ComponentProps<typeof Spinner>

export const Loading = (props: LoadingProps) => {
  return (
    <Center flex={1} alignItems="center" justifyContent="center">
      <Spinner color="blue" {...props} />
    </Center>
  )
}
