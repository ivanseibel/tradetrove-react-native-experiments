import { Box, Text } from '@gluestack-ui/themed'

export const SignIn = () => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg="$gray6">
      <Text
        color="$gray1"
        fontFamily="$heading"
        fontSize={'$2xl'}
        lineHeight={'$2xl'}
      >
        Sign In
      </Text>
    </Box>
  )
}
