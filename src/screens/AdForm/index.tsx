import { ImageUploadComponent } from '@components/ImageUploadComponent'
import * as SC from './styles'

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

      <ImageUploadComponent />
    </SC.Main>
  )
}
