import { SearchInput } from '@components/SearchInput'
import * as SC from './styles'
import { ProductCard } from '@components/ProductCard'
import { FlatList, Text } from 'react-native'

type ProductType = {
  id: string
  name: string
  price: number
  image: string
  condition: 'new' | 'used'
  seller_avatar: string
}

const products: ProductType[] = [
  {
    id: '1',
    name: 'Nike Air Max 2021',
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
]

export const ProductList = () => {
  return (
    <SC.Main>
      <SC.FilterContainer>
        <SC.Title>Discover & Explore</SC.Title>
        <SearchInput />
        <FlatList
          data={products}
          numColumns={2}
          style={{
            width: '100%',
            marginTop: 12,
          }}
          columnWrapperStyle={{
            justifyContent: 'space-around',
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
              seller_avatar={item.seller_avatar}
            />
          )}
        />
      </SC.FilterContainer>
    </SC.Main>
  )
}
