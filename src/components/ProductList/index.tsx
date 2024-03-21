import { SearchInput } from '@components/SearchInput'
import * as SC from './styles'
import { ProductCard } from '@components/ProductCard'
import { FlatList, Text } from 'react-native'
import { ContentText } from '@components/ContentText'
import { IndexPath, Select, SelectItem } from '@ui-kitten/components'
import { useState } from 'react'

type ProductType = {
  id: string
  name: string
  price: number
  image: string
  condition: 'new' | 'used'
  seller_avatar: string
}

type ComponentProps = {
  headerType: 'home' | 'myAds'
}

const MY_ADS_FILTER_OPTIONS = ['All', 'Active', 'Inactive']

const products: ProductType[] = [
  {
    id: '1',
    name: 'Nike Air Max 2021 jfjfj alalkak badum',
    price: 150,
    image:
      'https://www.shuropody.com/cdn/shop/collections/Women_s_trainers.jpg?v=1647954823',
    condition: 'used',
    seller_avatar: 'https://github.com/ivanseibel.png',
  },
  {
    id: '2',
    name: 'Macbook Pro 2020',
    price: 2500,
    image:
      'https://www.zdnet.com/a/img/resize/771843da7bfb3d3f37b0dca8da1bf9017b221f9a/2020/12/11/bb70ffc0-7d9a-4ed6-a29d-67e9044f2344/top.jpg?auto=webp&fit=crop&height=1200&width=1200',
    condition: 'new',
    seller_avatar: 'https://github.com/ivanseibel.png',
  },
  {
    id: '3',
    name: 'French Coffee Press',
    price: 50,
    image: 'https://coffeeclick.ie/wp-content/uploads/2021/09/French-press.png',
    condition: 'new',
    seller_avatar: 'https://github.com/ivanseibel.png',
  },
  {
    id: '4',
    name: 'iPhone Charger',
    price: 20,
    image: 'https://m.media-amazon.com/images/I/51C8GTKZ1DL.jpg',
    condition: 'used',
    seller_avatar: 'https://github.com/ivanseibel.png',
  },
  {
    id: '5',
    name: 'Nike Air Max 2021',
    price: 150,
    image: 'https://www.shuropody.com/cdn/shop/collections',
    condition: 'used',
    seller_avatar: 'https://github.com/ivanseibel.png',
  },
  {
    id: '6',
    name: 'Macbook Pro 2020',
    price: 2500,
    image:
      'https://www.zdnet.com/a/img/resize/771843da7bfb3d3f37b0dca8da1bf9017b221f9a/2020/12/11/bb70ffc0-7d9a-4ed6-a29d-67e9044f2344/top.jpg?auto=webp&fit=crop&height=1200&width=1200',
    condition: 'new',
    seller_avatar: '',
  },
  {
    id: '7',
    name: 'French Coffee Press',
    price: 50,
    image: 'https://coffeeclick.ie/wp-content/uploads/2021/09/French-press.png',
    condition: 'new',
    seller_avatar: '',
  },
  {
    id: '8',
    name: 'iPhone Charger',
    price: 20,
    image: 'https://m.media-amazon.com/images/I/51C8GTKZ1DL.jpg',
    condition: 'used',
    seller_avatar: '',
  },
  {
    id: '9',
    name: 'Nike Air Max 2021',
    price: 150,
    image: 'https://www.shuropody.com/cdn/shop/collections',
    condition: 'used',
    seller_avatar: '',
  },
  {
    id: '10',
    name: 'Macbook Pro 2020',
    price: 2500,
    image:
      'https://www.zdnet.com/a/img/resize/771843da7bfb3d3f37b0dca8da1bf9017b221f9a/2020/12/11/bb70ffc0-7d9a-4ed6-a29d-67e9044f2344/top.jpg?auto=webp&fit=crop&height=1200&width=1200',
    condition: 'new',
    seller_avatar: '',
  },
  {
    id: '11',
    name: 'French Coffee Press',
    price: 50,
    image: 'https://coffeeclick.ie/wp-content/uploads/2021/09/French-press.png',
    condition: 'new',
    seller_avatar: '',
  },
  {
    id: '12',
    name: 'iPhone Charger',
    price: 20,
    image: 'https://m.media-amazon.com/images/I/51C8GTKZ1DL.jpg',
    condition: 'used',
    seller_avatar: '',
  },
  {
    id: '13',
    name: 'Nike Air Max 2021',
    price: 150,
    image: 'https://www.shuropody.com/cdn/shop/collections',
    condition: 'used',
    seller_avatar: '',
  },
]

const renderHomeHeader = () => {
  return (
    <SC.FilterContainer>
      <SC.Title>Discover & Explore</SC.Title>
      <SearchInput />
    </SC.FilterContainer>
  )
}

const renderMyAdsHeader = ({
  selectedIndex,
  setSelectedIndex,
}: {
  selectedIndex: IndexPath
  setSelectedIndex: (index: IndexPath) => void
}) => {
  return (
    <SC.ProductsHeader>
      <ContentText type="dark">9 items</ContentText>

      <Select
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index as IndexPath)}
        style={{ width: 133 }}
        placeholder="Filter"
        value={
          MY_ADS_FILTER_OPTIONS[selectedIndex.row as number] ||
          MY_ADS_FILTER_OPTIONS[0]
        }
      >
        {MY_ADS_FILTER_OPTIONS.map((option) => (
          <SelectItem key={option} title={option} />
        ))}
      </Select>
    </SC.ProductsHeader>
  )
}

export const ProductList = ({ headerType }: ComponentProps) => {
  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(
    new IndexPath(0)
  )

  return (
    <SC.Main>
      {headerType === 'home' && renderHomeHeader()}
      {headerType === 'myAds' &&
        renderMyAdsHeader({ selectedIndex, setSelectedIndex })}
      <FlatList
        data={products}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          marginTop: 12,
        }}
        contentContainerStyle={{
          paddingBottom: 70,
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          flex: 1,
          marginBottom: 24,
        }}
        renderItem={({ item }) => (
          <ProductCard
            condition={item.condition}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            seller={{
              id: '999',
              name: 'Ivan Seibel',
              avatar: item.seller_avatar,
            }}
          />
        )}
      />
    </SC.Main>
  )
}
