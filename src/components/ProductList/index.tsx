import { SearchInput } from '@components/SearchInput'
import * as SC from './styles'
import { ProductCard } from '@components/ProductCard'
import { FlatList } from 'react-native'
import { ContentText } from '@components/ContentText'
import { IndexPath, Select, SelectItem } from '@ui-kitten/components'
import { useState } from 'react'

type ProductType = {
  id: string
  name: string
  price: number
  image: string
  active?: boolean
  condition: 'new' | 'used'
  seller: {
    id: string
    name: string
    avatar: string
  }
}

type ComponentProps = {
  headerType: 'home' | 'myAds'
  showInactive?: boolean
}

const MY_ADS_FILTER_OPTIONS = ['All', 'Active', 'Inactive']

const products: ProductType[] = [
  {
    id: '1',
    name: 'Nike Air Max 2021',
    price: 150,
    active: true,
    image:
      'https://www.shuropody.com/cdn/shop/collections/Women_s_trainers.jpg?v=1647954823',
    condition: 'used',
    seller: {
      id: '999',
      name: 'Ivan Seibel',
      avatar: 'https://github.com/ivanseibel.png',
    },
  },
  {
    id: '2',
    name: 'Macbook Pro 2020',
    price: 2500,
    active: false,
    image:
      'https://www.zdnet.com/a/img/resize/771843da7bfb3d3f37b0dca8da1bf9017b221f9a/2020/12/11/bb70ffc0-7d9a-4ed6-a29d-67e9044f2344/top.jpg?auto=webp&fit=crop&height=1200&width=1200',
    condition: 'new',
    seller: {
      id: '998',
      name: 'Ivan Seibel',
      avatar: 'https://thispersondoesnotexist.com/',
    },
  },
  {
    id: '3',
    name: 'French Coffee Press',
    price: 50,
    active: true,
    image: 'https://coffeeclick.ie/wp-content/uploads/2021/09/French-press.png',
    condition: 'new',
    seller: {
      id: '999',
      name: 'Ivan Seibel',
      avatar: 'https://github.com/ivanseibel.png',
    },
  },
  {
    id: '4',
    name: 'iPhone Charger',
    price: 20,
    active: true,
    image: 'https://m.media-amazon.com/images/I/51C8GTKZ1DL.jpg',
    condition: 'used',
    seller: {
      id: '998',
      name: 'Ivan Seibel',
      avatar: 'https://thispersondoesnotexist.com/',
    },
  },
  {
    id: '5',
    name: 'Dr. Martens Boots',
    price: 150,
    active: true,
    image:
      'https://media.glamour.com/photos/5c786327c8f3282db5088766/4:3/w_2400,h_1800,c_limit/0301_drmarten_lede_social_River.jpg',
    condition: 'used',
    seller: {
      id: '999',
      name: 'Ivan Seibel',
      avatar: 'https://github.com/ivanseibel.png',
    },
  },
  {
    id: '6',
    name: 'Tripod for Camera',
    price: 2500,
    active: true,
    image:
      'https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_214,q_auto,w_380/c_pad,h_214,w_380/R1438983-01?pgw=1',
    condition: 'new',
    seller: {
      id: '998',
      name: 'Ivan Seibel',
      avatar: 'https://thispersondoesnotexist.com/',
    },
  },
  {
    id: '7',
    name: 'Italian Coffee Press',
    price: 50,
    active: true,
    image:
      'https://majestycoffee.com/cdn/shop/articles/moka_pot_1534553b-bf80-4b30-86fc-e1087b7cc9f5_800x.jpg?v=1684797291',
    condition: 'new',
    seller: {
      id: '998',
      name: 'Ivan Seibel',
      avatar: 'https://thispersondoesnotexist.com/',
    },
  },
  {
    id: '8',
    name: 'Bluetooth Speaker JBL',
    price: 20,
    image: 'https://image.smythstoys.com/original/desktop/212788.jpg',
    condition: 'used',
    active: true,
    seller: {
      id: '998',
      name: 'Ivan Seibel',
      avatar: 'https://thispersondoesnotexist.com/',
    },
  },
  {
    id: '9',
    name: 'Adidas Superstar 2021',
    price: 150,
    active: true,
    image:
      'https://images.stockx.com/images/adidas-Superstar-Chinese-New-Year-2021-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1621454856&q=60',
    condition: 'used',
    seller: {
      id: '998',
      name: 'Ivan Seibel',
      avatar: 'https://thispersondoesnotexist.com/',
    },
  },
  {
    id: '10',
    name: 'DJI Drone Mini 2',
    price: 2500,
    active: true,
    image:
      'https://www.dpreview.com/files/p/articles/6857732420/DJI_Mavic_Mini_2.jpeg',
    condition: 'new',
    seller: {
      id: '998',
      name: 'Ivan Seibel',
      avatar: 'https://thispersondoesnotexist.com/',
    },
  },
  {
    id: '11',
    name: 'Bicycle Helmet',
    price: 50,
    active: true,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/ba/Bicycle_Helmet_0085.jpg',
    condition: 'new',
    seller: {
      id: '998',
      name: 'Ivan Seibel',
      avatar: 'https://thispersondoesnotexist.com/',
    },
  },
  {
    id: '12',
    name: 'Cricket Ball',
    price: 20,
    active: true,
    image:
      'https://www.shutterstock.com/image-vector/cricket-ball-sports-equipment-realistic-600nw-468996683.jpg',
    condition: 'used',
    seller: {
      id: '998',
      name: 'Ivan Seibel',
      avatar: 'https://thispersondoesnotexist.com/',
    },
  },
  {
    id: '13',
    name: 'Pilot Sunglasses',
    price: 150,
    active: true,
    image:
      'https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-tpilot-sunglasses-70455218_1029533_ED.jpg',
    condition: 'used',
    seller: {
      id: '998',
      name: 'Ivan Seibel',
      avatar: 'https://thispersondoesnotexist.com/',
    },
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

export const ProductList = ({
  headerType,
  showInactive = false,
}: ComponentProps) => {
  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(
    new IndexPath(0)
  )

  return (
    <SC.Main>
      {headerType === 'home' && renderHomeHeader()}
      {headerType === 'myAds' &&
        renderMyAdsHeader({ selectedIndex, setSelectedIndex })}
      <FlatList
        data={
          showInactive ? products : products.filter((product) => product.active)
        }
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
            active={item.active}
            showSeller={headerType !== 'myAds'}
            seller={{
              id: item.seller.id,
              name: item.seller.name,
              avatar: item.seller.avatar,
            }}
          />
        )}
      />
    </SC.Main>
  )
}
